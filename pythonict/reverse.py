rev=0
a=0
n=int(input("enter a number"))
while(n>0):
    a=n%10
    rev=rev*10+a
    n=n/10
print(rev)
    