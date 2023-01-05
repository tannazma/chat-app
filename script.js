
fetch ("http://127.0.0.1:3000/ardjbhb")
fetch("http://127.0.0.1:3000/tannaz")


const newMessageDiv = document.createElement ("div");
newMessageDiv.textContent="Hello again!";
newMessageDiv.classList.add("message1", "m1")

const messageFromYou=document.createElement("div")

newMessageDiv.prepend(messageFromYou);
document.body.appendChild(newMessageDiv)
