def largest(a,b,c):
    if(a>b and a>c):
        print("first number is largest")
    elif(b>a and b>c):
        print("second number is largest")
    else:
        print("third number is largest")


num1=int(input("Enter a number"))
num2=int(input("Enter a number"))
num3=int(input("Enter a number"))
result = largest(num1,num2,num3)
print(result)