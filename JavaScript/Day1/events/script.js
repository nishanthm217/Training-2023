//Parent to child movement

// function myFun(){
//     var parent = document.getElementById("choice");
//     var child = parent.childNodes[1];
//     child.style.color="red";
// }

// function myFun(){
//     var parent = document.getElementById("choice");
//     var child = parent.firstElementChild;
//     child.style.color="red";
// }

// function myFun(){
//     var parent = document.getElementById("choice");
//     var child = parent.lastElementChild;
//     child.style.color="red";
// }


//Child to parent movement

// function myFun(){
//     var child = document.getElementById("p_one");
//     var parent = child.parentNode;
//     parent.style.color="red";
// }

//sibling to sibling movement

// function myFun(){
// var child = document.getElementById("p1");
// var sibling = child.nextElementSibling;
// sibling.style.color="red";
// }

//  function myFun(){
    // var child = document.getElementById("p1");
    // var sibling = child.previousElementSibling;
    // sibling.style.color="red";
    // }





    var div_one = document.getElementById("event_one");
    var para_one = document.getElementById("p1");
    var div_two = document.getElementById("event_two");
    var para_two = document.getElementById("p2");

    div_one.addEventListener("mouseenter",myFun);
    div_one.addEventListener("mouseleave",myFun1);
    function myFun(){
        div_two.style.backgroundColor="red";
        para_two.textContent="WELCOME TO THE BOX"
    }

    function myFun1()
    {
        div_two.style.backgroundColor="green";
    }


    var text = document.createElement("h2");

    function givetext()
    {
        text.innerHTML="Welcome! You Did It";
        document.body.appendChild(text);
    }

    function removetext()
    {
        text.remove();
    }