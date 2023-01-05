
fetch("http://127.0.0.1:3000/ardjbhb")
fetch("http://127.0.0.1:3000/tannaz")


const newMessageDiv = document.createElement("div")
newMessageDiv.classList.add("message1")
// newMessageDiv.textContent = "Hello again!"

const messageFromYou = document.createElement("div")
messageFromYou.textContent="Hello again!"
messageFromYou.classList.add("m1")
newMessageDiv.prepend(messageFromYou);

const messageDiv = document.querySelector(".chat-container")
messageDiv.classList.add("chat-container")
document.getElementById("chatContainer").appendChild(newMessageDiv)
