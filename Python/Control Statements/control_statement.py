#Break statement
a = "Mynamesnishanth ";
for x in a:
    if x == " ":
        break
    print("The current value is: ",x);

var  = 50;
while var >1:
    print("The current variable value will be: ",var);
    var = var-1;
    if var ==25:
        break
print("You have reached the end");

# Continue statement

b = "welcome";
for y in b:
    if y == "m":
        continue
    print("The current letter: ",y);


value = 50;
for i in range(value):
    value = value-1;
    if value==6:
        continue
    elif value==8:
        continue
    elif value==10:
        continue
    elif value==12:
        continue
    elif value==14:
        continue
    elif value==16:
        continue
    elif value==18:
        continue   
    print("The number is: ",value);


# using pass statement

passvalue = 100;

for x in range(passvalue):
    if(x % 2 ==0):
        pass
    else:
        print(x);

inputpassvalue = "Welcome to python";
for a in inputpassvalue:
    if a =="o":
        print("Pass  is executed");
        pass
    print("Current value: ",a);
