let myImage = document.querySelector("#bike1");
myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "yamaha1.jpg") {
    myImage.setAttribute("src", "yamaha2.jpg");
  } else {
    myImage.setAttribute("src", "yamaha1.jpg");
  }
};

let myImage1 = document.querySelector("#bike2");
myImage1.onclick = () => {
  let mySrc1 = myImage1.getAttribute("src");
  if (mySrc1 === "enfield.jpg") {
    myImage1.setAttribute("src", "enfield1.jpg");
  } else {
    myImage1.setAttribute("src", "enfield.jpg");
  }
};
