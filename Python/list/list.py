#lists are mutable
#creating the list
list = [10,20,30,40,50,60];
print(list);

print(list[0]);
print(list[-1]);

print(list[:]);

#Adding elements in the list

d=list + [70,80,90,100,150,170];
print(d);

#It is possible to change the content of the lists
d[2]=250;
print(d);

#new list
new_lists = [20,40,60,80,100];
new_lists.append(150);

print(new_lists);

new_lists.append(150*3);
print(new_lists);

#Assignment of elements to the lists
letters =['a','b','c','d','e','f','g'];
print(letters);

#replacing the values 
letters[1:4]=['B','C','D'];
print(letters);

#removing the elements in the python
letters[0:4]=[];
print(letters);

#Empty the full lists
# letters[:]=[];
print(letters);

print("The length of the letters list is: ",len(letters));

#Nesting the lists
list_one = ['x','y','z','p'];
list_two =['g','p','t','m'];
list_final = [list_one,list_two];
print(list_final);

#Manipulation of nested lists
print(list_final[0][1]);
print(list_final[1][2]);
print(list_final[1][0]);

#typeof in list
print(type(list_one));

#list allows duplicated values
fruits =["orange","apple","mango","banana","grapes","strawberry","berries","mango", "orange","apple"];
print(fruits);
print("The length of the fruits list is: ",len(fruits));

list_boolean = [True,False,True,False];
print(list_boolean);

#list constructor:

empty_list=[];
print(empty_list);



#list methods
#append()
fruitsCreate =["orange","apple","mango","banana","grapes","strawberry","berries","mango", "orange","apple"];
print("The fruitsCreate in the lists are: ",fruitsCreate);

fruitsCreate.append("cucumber");
print("The appeded list of the fruits: ",fruitsCreate);



#clear()
fruitsCreate.clear();
print(fruitsCreate);



#copy
fruitsCreate =["orange","apple","mango","banana","grapes","strawberry","berries","mango", "orange","apple"];
copyofFruits = fruitsCreate.copy();
print("The list copied: ",copyofFruits);



#count
print("The count of apples: ",fruitsCreate.count("apple"));
print("The count of mango: ",fruitsCreate.count("mango"));
print("The count of banana: ",fruitsCreate.count("banana"));



#extend
cars = ["volkswagen","BMW","ford","Audi","kia"];
fruitsCreate.extend(cars);
#fruits print
print("The extended list :",fruitsCreate);



#index
print("The index of the volkswagen is: ",cars.index("volkswagen"));
print("The index of the ford is: ",cars.index("ford"));
print("The index of the kia is: ",cars.index("kia"));



#insert()
cars.insert(1,"volkswagen");
print(cars);

cars.insert(10,"lamborghini");
print(cars);



#pop()
print(cars);
cars.pop(1);
print(cars);
x = cars.pop();
print("The removed value: ",x);
print(cars);



#remove
print(cars);
cars.remove("kia");
print("After removing the car: ",cars);



#--> del
del cars[0];
print(cars);



#clear method empties the list 
cars.reverse();
print(cars);



#sort() in list
cars.sort();
print("The list after sorting: ",cars);


#lists comprehension in python
createSquare =[]
for x in range(10   ):
    createSquare.append(x);
print("Create square - lists: ",createSquare * 2);



#Creating empty list and appending dynamically through the lists
combination =[];
for x in [1,2,3]:
    for y in [3,5,7]:
        if x!=y:
            combination.append((x,y))

print(combination);



#Printing the elements which are greater than 10 in the lists
vec =[10,-1,-20,-15,20,25,30];
for x in vec:
    if x > 10:
        print(x);