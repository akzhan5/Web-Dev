a = int(input("number: ")) 

b = a-1 
c = a+1 

val1 = "The next number for the number {} is {}" 
val2 = "The previous number for the number {} is {}" 

print(val1.format(a, c)) 
print(val2.format(a,b)) 