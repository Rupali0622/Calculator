let boxes=document.querySelectorAll("button");
let screen=document.querySelector(".display");
let add=document.querySelector(".add");
let num1=10;
let num2=5;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.style.color="black";
    });
});

screen.addEventListener("mouseover",myFunction);

const myFunction=()=> {
    document.getElementsByClassName("display").value = addition();
  }

const addition=()=>{
    return num1+num2;
};
const subtraction=()=>{
    return num1-num2;
};
const multiplication=()=>{
    return num1*num2;
};
const division=()=>{
    return num1/num2;
};

