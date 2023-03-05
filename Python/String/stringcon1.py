str = "working hard never fails";
print(str[2:]);

#encode

strEncode = "working hard never fails";
setEncode = strEncode.encode();
print(setEncode);


#format_map

formatMap = {'x': 'Nishanth', 'y':'football'}

print("{x} loves playing {y}".format_map(formatMap));

#isalnum()

alnumeric = "hdsuper";

print("Alpha numeric: ",alnumeric.isalnum());

#isalpha()
alphanum ="GHGUFHIUIH";

print("Is alpha: ",alphanum.isalpha());


#isascii()
asciiOut = "hfirrht5w4";
print("Is ascii: ",asciiOut.isascii());

#isdecimal()
decimalOut = "3333333333";
print("Output for Isdecimal",decimalOut.isdecimal());


#isidentifier


from keyword import iskeyword

#isidentifier
IdentifierCheck = "isdecimal";
print("Output for identifier",IdentifierCheck.isidentifier());



#iskeyword
Iskeyword = "islower";
print("Output for isKeyword",iskeyword("islower"));



#islower
Islower = "nishanth";
print("Output for islower",Islower.islower());



#isnumeric
Isnumeric = "12344566";
print("Output for Isnumeric", Isnumeric.isnumeric());


#isprintable()
PrintableText = "How are you!"
print("isprintable Output: ",PrintableText.isprintable());


PrintableTextTwo = "How are you\n !";
print("isprintableTwo Output: ",PrintableTextTwo.isprintable());


# isspace()
CreateWhiteSpace = "               frf    ";
print("Output for isspace: ",CreateWhiteSpace.isspace());


#istitle()
Createtitle = "Therjhrking";
print("Output istitle: ",Createtitle.istitle());



#isupper()
CreateUpper = "ABCDEFGH";
print("Output for Upper: ",CreateUpper.isupper());


#join()
createjoin =("Nishanth", "shankar", "kamal");
x="@".join(createjoin);
print("Output for join",x);


#ljust()
createljust ="orange";
y = createljust.ljust(30);
print("ljust output: ",y, "is my favourite fruit!");


#lower
CreateLower = "THE KING";
storeLower = CreateLower.lower();
print("The value of the store lower is: ",storeLower);

#lstrip
lstripText = "              Nishanth          ";
lstripStore = lstripText.lstrip();
print("lstrip output: ",lstripStore);


#custom lstrip
txtlstrip = ",,,,,,,ssssqqqeee,,,,,apple";
txtlstripStore = txtlstrip.lstrip(",sqe");
print(txtlstripStore);


#maketrans
maketransString = "Welcome to the python tutorial";
maketransStringStore = maketransString.maketrans("W","J");
print("Output maketrans: ",maketransString.translate(maketransStringStore));


#partition
CreatePartition = "I love eating apple regularly without wasting";
OutPutTransition = CreatePartition.partition("apple");
print("Output partition: ",CreatePartition);

#replace
CreateReplace ="I eat apples";
OutputReplace = CreateReplace.replace("apples", "oranges");
print("Output for replace: ",OutputReplace);

#rfind
CreateRfind = "car as fast  as bike";
OutPutrfind = CreateRfind.rfind("tttt");
print("Outputrfind: ",OutPutrfind);


#rIndex
CreateRindex = "car as fast  as bike";
OutPutrindex = CreateRindex.rindex("as");
print("Outputrindex: ",OutPutrindex);


#rstrip
CreateRstrip = "        volkswagen         ";
OutPutrstrip = CreateRstrip.rstrip();
print("Among the cars",OutPutrstrip,"is one of the best cars in market");


#split
CreateSplit = "Volkswagen is best""I know that";
OutputSplit = CreateSplit.split("$");
print(OutputSplit);


#splitlines
CreateSplitlines = "I have an idea that \ncan we go \nto the trip"
OutputSplitlines = CreateSplitlines.splitlines();
print(OutputSplitlines);

#swapcase
CreateSwapCase = "Hello world";
OutputSwapcase = CreateSwapCase.swapcase();
print(OutputSwapcase);

#title
CreateTitle = "hEllo world";
OutputTitle = CreateTitle.title();
print(OutputTitle);