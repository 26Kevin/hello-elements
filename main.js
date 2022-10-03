// JavaScript Code

document.getElementById("btn").addEventListener("click", helloButton);

function helloButton() {
       alert("Hello Button");
}

document.getElementById("heading").addEventListener("click", helloHeading);

function helloHeading() {
    alert("Hello Heading");
}

document.getElementById("li1").addEventListener("click", helloListItem);
document.getElementById("li2").addEventListener("click", helloListItem);
document.getElementById("li3").addEventListener("click", helloListItem);

function helloListItem() {
    alert("Hello List Item");
}