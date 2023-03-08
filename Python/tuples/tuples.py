#Tuples are immutable in python, once assigned it cannot be changed.
#Tuples can contain the duplicate values inside it.
CreateTuple =("pen","paper","notebook","mouse",12345, 34343);
print(CreateTuple[0]);
print(CreateTuple[4]);


#Trying to change the value in the tuple
#CreateTuple[0]="mouse"; #Which gives type error in the following object doesn't support item assignment.

#Tuples can also be nested 
tupleNest = (CreateTuple, (1,2,3,4,5));
print("Output of the nested tuple: ",tupleNest);

#accessing the nested tuple
print(tupleNest[0][2]);

#Creating empty tuple
emptyTuple =();
print(emptyTuple);

singleTuple = (10);
print(singleTuple);

print("The type of the tuple: ",type(singleTuple));


#Tuple allows the duplicate values inside it
dupTuple = ("pen","paper", "pen");
print("Creating the duplicate tuple: ",dupTuple);

mytuple = ("apple", "banana", "cherry")
print(type(mytuple));



