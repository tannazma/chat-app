
fetch("http://127.0.0.1:3000/ardjbhb")
fetch("http://127.0.0.1:3000/tannaz")

messageFromMe = () => {
const newMessageDiv = document.createElement("div")
newMessageDiv.classList.add("message1")

const messageFromYou = document.createElement("div")
messageFromYou.textContent="Hello again!"
messageFromYou.classList.add("m1")
newMessageDiv.prepend(messageFromYou);

const messageDiv = document.querySelector(".chat-container")
messageDiv.classList.add("chat-container")
document.getElementById("chatContainer").appendChild(newMessageDiv)
}
messageFromYou = () => {
    const newMessageDiv = document.createElement("div")
    newMessageDiv.classList.add("message2")
    
    const messageFromYou = document.createElement("div")
    messageFromYou.textContent="Hi there!"
    messageFromYou.classList.add("m2")
    newMessageDiv.prepend(messageFromYou);
    
    const messageDiv = document.querySelector(".chat-container")
    messageDiv.classList.add("chat-container")
    document.getElementById("chatContainer").appendChild(newMessageDiv)
    }

messageFromMe()
messageFromYou()
