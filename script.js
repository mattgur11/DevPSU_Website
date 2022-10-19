$(document).ready(function() {
    $("#btn1").click(function(){
        //alert("mouseenter");
        //$("p.paragraph").toggle(); //# shows that it is an id, . is for class, [] for attribute (like [href])
        //$("#div1").slideToggle(3000);
        let div = $("div")
        div.animate({left: "400px", height: "300px", opacity: "0.5"}, "fast")
    }
    );
}
);








document.getElementById('demo').innerHTML = 'new text';
//document.getElementById('demo').id = 'demo2';
document.getElementById('demo').style.color = "red";
//document.getElementById('demo').outerHTML = "<button>a new button</button>"

function myFun(){
    alert("Alert message");
}

//myFun();

function darkMode(){
    document.getElementById("pagestyle").setAttribute("href", "./style-dark.css");
}

var a = 10;
let b = 20;
const c = 30; //value of const variables cannot be changed

a+=10;
b+=10;

console.log(a+b+c);


function keyPressed(input){
    console.log(input);
    document.getElementById("keypressed_text").innerHTML = input;
}

const key = function keyEvent(e){
    keyPressed(e.key);
    if (e.key === "f"){
        alert("f key was pressed");
    }
}

document.addEventListener("keypress", key);