const username = prompt("what is your name?")
ShowMessage = (text, messageUsername) => {
    const messageBoxDiv = document.createElement("div")
    const messageTextDiv = document.createElement("div")
    const messageUserDiv = document.createElement("div")

    const currentDay = new Date();
    const dateString = currentDay.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    const dateElement = document.createElement('div');
    dateElement.textContent = dateString;

    const align = messageUsername === username ? "right" : "left"

    if (align === "left") {
        messageBoxDiv.classList.add("message2")
        messageTextDiv.classList.add("m2")
        dateElement.classList.add('message2')
    } else if (align === "right") {
        messageBoxDiv.classList.add("message1")
        messageTextDiv.classList.add("m1")
        dateElement.classList.add('message2')
    }
    messageUserDiv.textContent = messageUsername
    messageUserDiv.classList.add("showUsername")
    messageTextDiv.textContent = text
    messageTextDiv.prepend(messageUserDiv);
    messageUserDiv.append(dateElement);

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
