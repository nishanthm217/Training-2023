newlist=["apple", "orange", "banana"];
#printing with the name and the number
for i in newlist:
    print(i, len(i));

#printing with skippin the list elements in python
for a in newlist:
    if a =="orange":
        continue
    print(a);

#printing using break statement
print("using break statement")
for b in newlist:
    if b =="orange":
        break
    print(b);


#Using continue and else in the for
print("Using for loop with continue and else")
for t in range(10):
    if(t==6):
        continue
    print(t);
else:
    print("Code execution finished");


#specifyiing the range in the loop
for e in range(2,15):
    print(e);


#using nestes for-loop
newlistOne = ["BMW", "Benz","rollsroyce"];
newlistTwo = ["white","blue", "red"];

for c in newlistOne:
    for d in newlistTwo:
        print(c,d);


n = 1;
while n<6:
    print(n);
    n = n+1;

print("Using while in break statement")
x = 1;
while x < 10:
    print(x);
    x = x+1;
    if(x==5):
        break

print("Example: The else is not executed in while when it encounters the break")
m =1;
while(m):
    if(m==6):
        break
    print(m);
    m+=1;
else:
    print("loop terminates")

print("Using else for the implementation");


a = ["skoda", "volkswagen","hyundai"];
b = "ninja";

i=0;
while(i<=len(a)):
    if(a[i]==b):
        break
    

print("While loop execution")
n=1;
while(n<10):
    n+=1;
    if(n==5):
        continue
    print(n);
print("Loop ended");


#infinite loops
while True:
    print("Nishanth");

#A break or continue statement found within nested loops applies to the nearest enclosing loop

#Nested while loops
age = int(input("Enter the age: "));
gender = input("Enter the gender: type m/M or F/f");

if age <18:
    if gender == "M":
        print("son");
    else:
        print("daughter");
elif age >18 and age<60:
    if gender =="M":
        print("Father");
    else:
        print("Mother");
else:
    if gender =="M":
        print("Grand Father");
    else:
        print("Grand Mother");