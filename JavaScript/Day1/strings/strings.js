const str = "This is nishanth";
const strs = 'This is nishanth';
console.log(str);
console.log(strs);

//Escaping character

const escape3 = "I'm lear\\ning javaScript";
console.log(escape3);

const primitives = `Hii JavaScript`;
console.log(primitives);


const string4 = new String("Hii Iam learning JavaScript");
console.log(string4);


//Character access

console.log("JavaScript".charAt(1));

// === vs ==

const strCompareOne = "ASPIRE SYSTEMS";
const strCompareTwo = "Aspire systems";

if(strCompareOne==strCompareTwo)
{
    console.log("Equal");
}
else
{
    console.log("It is not equal");
}

//UsingToUpperCase

const toUpperCase = "Aspire Systems";

const convertToupper = toUpperCase.toUpperCase();

console.log(convertToupper);

// eval()

const stringEvalOne = "2 + 2";

console.log(eval(stringEvalOne));

// const 

const valEval = new String("2 + 2");
console.log(eval(valEval));


// valueOf


const charcodeAt = "HELLO WORLD";

console.log(charcodeAt.charCodeAt(0));

//Concatenation

const strConcatOne = "Hello I'm nishanth";

const strConcatTwo = "I'm Studying Engineering";

console.log(strConcatOne.concat(strConcatTwo));

console.log(strConcatOne + strConcatTwo);

//Using toString

const myNum = 765;

const myStringConvert = myNum.toString();

console.log(typeof(myStringConvert));

//String length findings

const myString = "This is my string";
console.log(myString.length);


// string includes

const includeStore = "Nishanth";
console.log(includeStore.includes("anth"));

const startWith = "mozilla";

const startsStorer = startWith.startsWith("a");
console.log(startsStorer);

const findIndex = "The resource will be fetched";
const indexStorer = findIndex.indexOf("will");
console.log(indexStorer);

//Finding occurences

const firstOccurence ="simple work give simple benefit";

const indexSearch = firstOccurence.indexOf("simple");

console.log(indexSearch);

const secondOccurence = firstOccurence.indexOf("simple", indexSearch + 1);

console.log(secondOccurence);

//Extracting a substring from a string;

const stringStorer = "Hello everyone!! Welcome to my webpage";

const strOutput = stringStorer.slice(0,18);

console.log(strOutput);

//Using replace function

const replaceUser = "I am studying in canada";

const strReplace  = replaceUser.replace("canada", "america");

console.log(strReplace);


//using replaceAll

const replaceAllUser = "I am studying in canada and my brother also studying in canada";

const strReplaceAll  = replaceAllUser.replaceAll("canada", "america");

console.log(strReplaceAll);

const createSubstr = "JavaScript is very easy";

const substrFun  = function()
{
    return createSubstr.substring(11,18);
}

const ansForSubStr = substrFun();
console.log(ansForSubStr);

//trim
const trimmer = "       This is good movie         ";

const trimmerAns = trimmer.trim();

console.log(trimmerAns);

//text

const text  ="5";

const myText = text.padStart(4,"X");

console.log(myText);

//split
const StringSplit = "I am studying in canada and my brother also studying in canada";

const OutputSplitter = StringSplit.split(" ");

console.log(OutputSplitter);