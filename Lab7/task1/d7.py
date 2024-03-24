n = int(input()) 

arr = [] 

for i in range(n): 
    a = int(input()) 
    arr.append(a) 
arr2 = [] 

for i in range(n): 
   arr2.append(arr.pop()) 

for i in range(n): 
    print(arr2[i])