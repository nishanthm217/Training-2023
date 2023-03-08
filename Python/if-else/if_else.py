#Basic operations involved in the python
z = int(input("Enter the input to check the number is even or not: "));
if z % 2 ==0:
    print("The input is even number");
elif z<0:
    print("The input is negative number");
else:
    print("The input is not a even number")



x = int(input("Enter the number: "));

if x<0:
    print("The input is less than the zero");

elif x ==0:
    print("The input is equal to the zero");
elif x>0 and x<=40:
    print("The input is between the 0 to 40");
else:
    print("The input is greater than 40");


#check names using if-elif:
giveinput = input("Enter the item to get the rupees: ");

if giveinput=="pen":
    print("Rupees of the pen is 35");
elif giveinput=="rubber":
    print("Rupees of the rubber is 10");
elif giveinput=="A4":
    print("Rupees of the A4 is 2");
elif giveinput=="chart":
    print("Rupees of the chart is 10");
elif giveinput=="waterbottle":
    print("Rupees of the waterbottle is 100");
elif giveinput=="ink":
    print("Rupees of the ink bottle is 20");
else:
    print("The specified item is not present in the list");