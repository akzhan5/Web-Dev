a = input()
cnt = len(a)
ans = 0 
for x in a: 
    cnt-=1
    if x=='1': 
        ans += pow(2, cnt) 
    
print(ans)


