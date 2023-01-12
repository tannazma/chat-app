const username = prompt("what is your name?")
ShowMessage = (text, align, user) => {
    const messageBox = document.createElement("div")
    const messageText = document.createElement("div")
    const messageUser = document.createElement("div")


    if (align === "left") {
        messageBox.classList.add("message2")
        messageText.classList.add("m2")
    } else if (align === "right") {
        messageBox.classList.add("message1")
        messageText.classList.add("m1")
    }
    messageUser.textContent = user
    messageUser.classList.add("showUsername")
    messageText.textContent = text
    messageText.prepend(messageUser);

    messageBox.append(messageText);
    const messageDiv = document.querySelector(".chat-container")
    messageDiv.classList.add("chat-container")
    document.getElementById("chatContainer").appendChild(messageBox)
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
                if (username === messageObject.username) {
                    ShowMessage(messageObject.message, 'right', messageObject.username)
                } else {
                    ShowMessage(messageObject.message, 'left' , messageObject.username)
                }
            });
        }),
    1000);
