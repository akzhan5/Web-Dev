n = int(input()) 

arr = [] 

for i in range(n): 
    a = int(input()) 
    arr.append(a) 

for i in range(n): 
    if i>0: 
        if arr[i]>0: 
            if arr[i-1]>0: 
                print("YES") 
                break 
        if arr[i]<0: 
            if arr[i-1]<0: 
                print("YES") 

print("NO") 
        
                