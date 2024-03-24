n = int(input()) 

arr = [] 

for i in range(n): 
    a = int(input()) 
    arr.append(a) 

cnt = 0 
for i in range(n): 
    if i>0 and i+1<n: 
        if arr[i]>arr[i-1] and arr[i]>arr[i+1]: 
                cnt+=1 

print(cnt)