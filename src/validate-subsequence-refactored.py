# https://www.algoexpert.io/questions/Validate%20Subsequence

def isValidSubsequence(array, sequence):
    start_idx = 0
    arr_length = len(array)
    for x in sequence:
        found = False
        for arr_idx in range(start_idx, arr_length):
            if array[arr_idx] == x:
                found = True
                start_idx=arr_idx+1
                break
        if found == False:
            return False
    return True

print(isValidSubsequence([1,1,1,1,1], [1,1,1]))