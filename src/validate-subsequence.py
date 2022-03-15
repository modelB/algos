# https://www.algoexpert.io/questions/Validate%20Subsequence

def isValidSubsequence(array, sequence):
    if len(sequence) > len(array):
        return False
    dict = {}
    for i, x in enumerate(sequence):
        dict[x] = True
    orderIndex = 0
    for x in array:
        found = dict.get(x)
        if found:
            if sequence[orderIndex] == x:
                orderIndex+=1
            else:
                return False
        if orderIndex == len(sequence):
            return True
    if orderIndex < len(sequence):
        return False
    return True

print(isValidSubsequence([1,1,1,1,1], [1,1,1]))