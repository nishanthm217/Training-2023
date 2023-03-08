#unordered collection of data
#It is mutable
#It doesn't allows duplicate values
newdict ={'nishanth': 1234,'sugu': 123, 'rathish': 3434, 'rhhthish':3484};
print(newdict);

#inserting an element into the dictionary
newdict['sathur']=4355;
print(newdict);

#Delecting an element in the dictionary
del newdict['rhhthish'];
print(newdict);

#Access item
accessitemOne = newdict['nishanth'];
print("Output for item accessing: ",accessitemOne);

#using get()
getaccess = newdict.get('sugu');
print(getaccess);

#using keys() in dictionary
getdictkey = newdict.keys();
print("The dictionary keys: ",getdictkey);

#changing the item in the dictionary
#update() can also be used to add new elements to the dictionary    
Updatenewdict ={'nishanth': 1234,'sugu': 123, 'rathish': 3434, 'rhhthish':3484};
Updatenewdict.update({'sugu':12456463});
print(Updatenewdict);

#without using update()
Updatenewdict["rathish"]=4659472356;
print(Updatenewdict);

#Remove items in the dictionary
removenewdict ={'nishanth': 1234,'sugu': 123, 'rathish': 3434, 'rhhthish':3484};
removenewdict.pop('rhhthish');
print(removenewdict);

#clear() method clears the entire dictionary but not deletes the dictionary
# del deletes the dictionary

#looping in the dictionary
for x in removenewdict:
    print(x);

for x in removenewdict:
    print(removenewdict[x]);

print("Printing the keys")
for x in removenewdict.keys():
    print(removenewdict[x]);

print("printing the values with the keys");
for x,y in newdict.items():
    print(x,y);

#dicitionary copy can be copied by using the copy keyword.  

#Nesting dictionaries
dictfamily = {
    "childOne": {
    'name': 'nishanth',
    'id': 34342
    },

    "childTwo": {
    'name': 'ezhil',
    'id': 346464
    }
}

#Accessing through the nesting dictionary
print("Accessing the nesting dictinary: ",dictfamily["childOne"]["name"]);
print("Accessing the nesting dictinary: ",dictfamily["childTwo"]["name"]);
print("Accessing the nesting dictinary: ",dictfamily["childOne"]["id"]);
print("Accessing the nesting dictinary: ",dictfamily["childTwo"]["id"]);


#forming the dictionary 
#fromkeys()
accesOnekey = ('key1', 'key2', 'key3')
accessTwokey = 0
storekey = dict.fromkeys(accesOnekey, accessTwokey)
print("Using fromkeys()",storekey);

#setdefault method in python
car = {"model": 1999, "name": "RollsRoyce", "color": "blue"};
print("For setdefault: ",car);

car.setdefault("owner", "prince");
print(car);
