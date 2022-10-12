document.getElementById('demo').innerHTML = 'new text';
document.getElementById('demo').id = 'demo2';
document.getElementById('demo2').style.color = "red";
document.getElementById('demo2').outerHTML = "<button>a new button</button>"

function myFun(){
    alert("Alert message");
}

myFun();

function darkMode(){
    document.getElementById("pagestyle").setAttribute("href", "./style-dark.css");
}

var a = 10;
let b = 20;
const c = 30; //value of const variables cannot be changed

a+=10;
b+=10;

console.log(a+b+c);