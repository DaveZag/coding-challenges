#  The same solution implemented in Ruby
def rotatedSortedBrute(arr, target)
    arr.each_with_index do |num, index|
        return index if num === target
    end
    # OR arr.each_with_index {|num, index|return index if num === target}
    return -1
end
puts rotatedSortedBrute([1,2,3,4,5,6], 1)


def rotatedSorted(arr, target)
    left = 0
    right = arr.size-1

    while left <= right do
        middle = (left + right)/2
        return middle if arr[middle] === target

        if arr[left] <= arr[middle]
            if target>=arr[left] && target<arr[middle]
                right = middle - 1
            else
                left = middle + 1
            end
        else
            if target>arr[middle] && target<=arr[right]
                left = middle + 1
            else
                right = middle - 1
            end
        end
    end
    return -1
end

 puts rotatedSorted([1,2,3,4,5,6,7,8,9], 5)
 puts rotatedSorted([5, 1, 3], 3)