const username = prompt("what is your name?")
ShowMessage = (text, messageUsername) => {
    const messageBoxDiv = document.createElement("div")
    const messageTextDiv = document.createElement("div")
    const messageUserDiv = document.createElement("div")

    const align = messageUsername === username ? "right" : "left"

    if (align === "left") {
        messageBoxDiv.classList.add("message2")
        messageTextDiv.classList.add("m2")
    } else if (align === "right") {
        messageBoxDiv.classList.add("message1")
        messageTextDiv.classList.add("m1")
    }
    messageUserDiv.textContent = messageUsername
    messageUserDiv.classList.add("showUsername")
    messageTextDiv.textContent = text
    messageTextDiv.prepend(messageUserDiv);

    messageBoxDiv.append(messageTextDiv);
    const messageDiv = document.querySelector(".chat-container")
    messageDiv.classList.add("chat-container")
    document.getElementById("chatContainer").appendChild(messageBoxDiv)
}

// ShowMessage("Ok, let's go on 7 PM.", "right")
// ShowMessage("See you!", "left")
// ShowMessage("Thanks again", "right")
// ShowMessage("No problem!", "left")



sendMessage = () => {
    const inputMessage = document.querySelector("input")
    // ShowMessage(inputMessage.value, "right");
    fetch("http://192.168.178.39:3000/send-message", { method: 'POST', body: JSON.stringify({ message: inputMessage.value, username: username }) })
    inputMessage.value = ""

}

const inputMessage = document.querySelector("input")
inputMessage.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage()
    }
})

setInterval(() =>
    fetch("http://192.168.178.39:3000/get-messages")
        .then(res => res.text())
        .then(messages => JSON.parse(messages))
        .then(messageObjects => {
            document.getElementById('chatContainer').innerHTML = '';
            messageObjects.forEach(messageObject => {
                ShowMessage(messageObject.message, messageObject.username)
            });
        }),
    1000);
    