# https://www.algoexpert.io/questions/Two%20Number%20Sum

def twoNumberSum(array, targetSum):
    def diff(n):
        return targetSum-n
    diffs = {}
    for x in array:
        if diffs.get(x) and diff(x) != x:
            return [diff(x), x]
        diffs[diff(x)] = True
    return []
    
    

twoNumberSum([1,2,3,4,7], 10)