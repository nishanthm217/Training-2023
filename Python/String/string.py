print("My first program in python");

x = input("Enter your name: ");
print("My name is",x);

2+2

a = 50 + (50*4);
print(a);

#Division always returns floating point number
x = (50/2 * 60/2) * 5;
print(x);

#Operators in python
#Addition and substraction
a = 10+60;
print(a);
b = 20-50;
print(b);

#Classic division will always returns float
y = 50/4;
print(y);

# floor division returns a number and it discards the fractional part
x = 17//4;
print(x);

# Modules returns the remainder of the expression
x= 13%4;
print(x);

y = 12%4;
print(y);

# using ** power

x = 5 **2; #5 to the power of 2

print(x);

y = 10 ** 2;
print(y);

# comparing
"""
x =5;
y = "5";  unsupported operand type(s) for +: 'int' and 'str'
z = x+y;
"""
print("Hello");

# Operators with mixed type operands convert the integer operand to floating point.

# last printed expression will be called by using _. in terminal

x = 5;
y = 5.5;
z = x*y;
print(z);

#Escaping 
print("My name is nish\nanth");

print("My name is nish\anth");

print("My name is nish\tanth");

#to use ' inside it we can use \' or we can use "" instead
print('My name is ni\'shanth');

# \" and \"
# use double quotes inside the double quotes string
print("Hi I am l\"earning\"python");

#using in directory

print("C:drive\name"); # here n is name it shouldn't be printed in next line

# To overcome this problem use the expresssion use r

print(r"C:drive\name");

#string concatenation

print("I am " + " playing " + " foot ball |");

b = "Learning";
c = b + " JavaScript";
print(c);

access = "Hii Iam Python";
print(access[6]);
print(access[-1]);
print(access[-2]);

#slicing 

print(access[0:9]);

print(access[:6]);

print(access[-2:]);

wordCompare = "nice work";

print("Ha" + wordCompare[-2:]);

print(len(access));

print("""""Python is very easy""""");

print('''''Python is very easy''''');

print("Python is very easy");

print(str(b"ndbkfb"));

word  ="hard work Never fails";
print(word.capitalize()); #Capitalizes the first word

print(word.upper()); # capitalizes the whole string

print(word.lower()); # Lowers the whole string

wordOne = "HARD WORK NEVER FAILS";

print(wordOne.casefold()); # converts to the smaller case

a = wordOne.center(100); # Increases to the length of 100.

print(a);
print(len(a));

wordTwo = "I love apple, apple are my favorite fruit";

print(wordTwo.count("apple")); #returns the number of times a specified value appears in the string.

print(wordTwo.endswith("fruit")); #Returns boolean true when the string ends with specified value else false

print(wordTwo.expandtabs(4));

print(wordTwo.find("apple")); #returns the starting index of the word what we have given.

#format() method formats the input and inserts the specified value in the string's placeholder

formatWord = "The name is {name} and i am from {city}.".format(name="Nishanth", city="salem");
print(formatWord);

