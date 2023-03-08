# sets are unordered and mutable data structures in python
# It doesn't allow duplicates
# Set items are unchangeable, but you can remove items and add new items.
fruits = {'banana', 'apple', 'orange', 'cherry','papaya', 'grapes', 'watermelon', 'watermelon', 'watermelon'};
print(fruits);

#Duplicates have been removed
fruitsDuplicate = {'banana', 'apple', 'orange', 'cherry','papaya', 'grapes', 'watermelon', 'watermelon', 'watermelon'};
print(fruitsDuplicate); #It shows that duplicates have been removed.

print("Checking for the elements in the fruitsDuplicates: ", "apple" in fruitsDuplicate);
print("Checking for the elements in the fruitsDuplicates: ", "cucumber" in fruitsDuplicate);

#Creating the sets
newSet = set("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
print(newSet);

# Another set
newSetOne = set("ABCDEFGHIJKLMNOPQRSTUVWXY");
print(newSetOne);

# Final set
finalSet  = newSet - newSetOne;
print("Substract: ",finalSet);


OperatorOr = newSet | newSetOne;
print("using OR Operator: ",OperatorOr);


OperatorAnd = newSet & newSetOne;
print("Using AND operator: ",OperatorAnd);


#newSet
newSetTwo = {"apple", "orange",2,True , False, 1,0};
print("New setTwo output: ",newSetTwo)

print(type(newSetTwo));

#Set methods

# #Adding items in set
addSetItems = {"apple", "orange", "banana"};
addSetItems.add("mango");
print(addSetItems);



#Updating the set items with another set items
#Update is used for adding the set with another set
anotherSet = {"vivo", "iphone", "redmi", "realme", "huawei"};
addSetItems.update(anotherSet);
print(addSetItems);


#Accessing the set
print("The set items")
for x in addSetItems:
    print(x);

#Adding elements to the set
anotherSet.add("redmagic");
print(anotherSet);

# #We can use remove method and discard method to remove the item from the set
anotherSet.remove("vivo");
print(anotherSet);

# Using union items in set
# Both union() and update() will exclude any duplicate items.
set1 ={1,2,3,4};
set2={"a","b","c","d"};
set3 = set1.union(set2);
print("The union of set3: ",set3);

# #update
set1.update(set2);
print("Using update on set1: ", set1);

# #intersection_update - Will update in the same x set.
x = {"yellow", "red", "blue"};
y = {"blue","pink","black"};
x.intersection_update(y);
print(x);

#intersection will return the new set(specified set)
p ={1,2,3};
q ={3,4,5};
a = p.intersection(q);
print("Intersection: ",a);

#symmetric_difference_update() --> Will return in the elements which are not present both sets
symCreate = {1,2,3};
symCreate2 = {3,4,5};
symCreate.symmetric_difference_update(symCreate2);
print("Output for symmetric_difference_update: ", symCreate);


#symmetric_difference()
norsymCreate = {1,2,3};
norsymCreate2 = {3,4,5};
store= norsymCreate.symmetric_difference(norsymCreate2);
print("Output for symmetric_difference",store);


# #add() 
fruitsCreate = {"orange","banana","grapes"};
fruitsCreate.add("apple");
print("Output for add: ",fruitsCreate);


# #clear()
fruitsClear = {"orange","banana","grapes"};
fruitsClear.clear();
print("Output for clear: ",fruitsClear);


# #copy()
fruitsCopy = {"orange","banana","grapes"};
copyStore = fruitsCopy.copy();
print("Output for copy: ",copyStore);

# #difference()
set_differenceOne = {"apple", "banana", "cherry"}
set_differenceTwo = {"google", "microsoft", "apple"}
t = set_differenceOne.difference(set_differenceTwo)
print("Output for difference: ",t)


# #disjoint --> In disjoint there is no match element it returns ture.
CreatedisjointOne = {"apple", "banana", "cherry"}
CreatedisjointTwo = {"google", "microsoft", "facebook"}
CreatedisjointStore = CreatedisjointOne.isdisjoint(CreatedisjointTwo)
print("Output for disjoint: ",CreatedisjointStore);


# #issubset() --> In issubset() there is no match element it returns false.
CreatedissubsetOne = {"a", "b", "c"}
CreatedissubsetTwo = {"f", "e", "d", "c", "b", "a"}
storeissubset = CreatedissubsetOne.issubset(CreatedissubsetTwo)
print("Output for issubset: ",storeissubset);

# #issuperset() --> If all elements present in the y should present in the x superset otherwise it returns false.
CreatedissupersetOne = {"f", "e", "d", "c", "b", "a"}
CreatedissupersetTwo = {"a", "b", "c"}
storeissuperset = CreatedissupersetOne.issuperset(CreatedissupersetTwo);
print("Output for issuperset: ",storeissuperset);