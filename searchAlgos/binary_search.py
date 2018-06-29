arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def binary_search(arr, target):
    high = len(arr)
    low = 0

    while low <= high:
        mid = (low + high) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1


print(binary_search(arr, 1))
