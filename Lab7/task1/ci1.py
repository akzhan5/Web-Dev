a = int(input()) 
b = int(input()) 
str = []

for x in range(a,b+1): 
    if x%2==0: 
        str.append(x)

for x in str: 
    print(x) 