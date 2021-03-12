# def quicksort(array):
#   if len(array) < 2:
#     return array
#   else:
#     pivot = array[0]
#     less = [ i for i in array[1:] if i < pivot ]
#     greater = [ i for i in array[1:] if i > pivot ]
#     print less, greater
#     return quicksort(less) + [ pivot ] + quicksort(greater)

# print quicksort([100, 2, 4, 1, 300])

def exerscise(array, n):
  newArr = []

  for i in array:
    newArr.append(i * n)

  print newArr
  if n == 2:
    exerscise(array, 3)
  if n == 3:
    exerscise(array, 7)
  else:
    return 

print exerscise([1, 5, 2], 2)