
fetch("http://127.0.0.1:3000/ardjbhb")
fetch("http://127.0.0.1:3000/tannaz")

messageFromAnyone = (text, align) => {
    const newMessageDiv = document.createElement("div")
    newMessageDiv.classList.add("message2")
    const messageFromYou = document.createElement("div")
    messageFromYou.textContent = text
    messageFromYou.classList.add("m2")

    newMessageDiv.prepend(messageFromYou);
    const messageDiv = document.querySelector(".chat-container")
    messageDiv.classList.add("chat-container")
    document.getElementById("chatContainer").appendChild(newMessageDiv)
}

messageFromAnyone("Ok, let's go on 7 PM.")
messageFromAnyone("Ok, let's go on 7 PM.")
messageFromAnyone("Ok, let's go on 7 PM.")
messageFromAnyone("Ok, let's go on 7 PM.")