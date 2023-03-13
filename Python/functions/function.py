print("Ex:1")
def helloworld(name):
    print(f"Hello world my name is {name}." );

helloworld("Nishanth");


print("Ex:2")
def greet():
    print("Hello world");

greet();


print("Ex:3")
def numbers_add(num1, num2):
    sum = num1 + num2;
    print("Output of the program: ",sum);

numbers_add(40,20);

print("Ex:4")

print("Ex: 5")
#calling the functions with argument name in function call
def numbers_substract(numOne, numTwo):
    total = numOne-numTwo;
    print("output of the program: ",total);

numbers_substract(numOne=100, numTwo=80);

#The return statement also denotes that the function has ended. Any code after return is not executed.

#Defining the function with return type
print("Ex:6")
def multiply_function(num):
    multiply = num*num;
    return multiply;

storeMultiply = multiply_function(43);
print(storeMultiply);


print("Ex:7")
#python library functions
import math
sq_root = math.sqrt(4)
print("The square root of the number: ",sq_root);
print(type(sq_root));

powerStore = pow(2,3);
print(powerStore);


print("Ex: 8")
def function_mul(input):
    return input * input;

for i in [4,5,6,7,8,9,10]:
    storeFun = function_mul(i)
    print(f"The square of the number {i}: ", storeFun);

print("Ex: 9")
def function_adding(a=1, b=10):
    return a+b

#function calling
valuepass = function_adding(10);
print(valuepass)
valuepass = function_adding(10,50);
print(valuepass)

print("Ex:10")
#python key argument
def display_info(first_name, last_name):
    print("First Name: ",first_name)
    print("Last_name: ",last_name);
#function call
display_info(last_name="M",first_name="Nishanth");


#python functions with arbitrary arguments
#numbers behaves as an array to store the multiple values.
print("Ex: 11")
def function_arbitray(*numbers):
    result =0

    for n in numbers:
        result = result + n

    print(result);

#function call
function_arbitray(1,2,3,4,5,6,7,8,9,10);

print("Ex:12")
#Recursion is the process of defining something in terms of itself.

def recurse_func(X):
    if X==1:
        return 1
    else:
        return(X * recurse_func(X-1));

passINput = 4;
print(f"The output of {passINput} is: ",recurse_func(passINput));