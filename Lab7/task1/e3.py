
def xor(a,b): 
    if a==0 and b==1: 
        return 1 
    elif a==1 and b==0: 
        return 1
    return 0

a = int(input())
b = int(input())

print(xor(a,b))