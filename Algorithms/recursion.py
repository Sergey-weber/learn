def countdown(arr):
  last = len(arr) - 1
  print len(arr)
  if last < 1:
    return
  else:
    del arr[last]
    countdown(arr)

# print countdown([1,2,3])

def sum(arr):
  if arr == []:
    return 0
  else:
    return list[0] + sum(list[1:])
    

arr = [1,2,100]    

print sum(arr)