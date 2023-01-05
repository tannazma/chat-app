
fetch("http://127.0.0.1:3000/ardjbhb")
fetch("http://127.0.0.1:3000/tannaz")

messageFromAnyone = (text, align) => {
    const messageBox = document.createElement("div")
    const messageText = document.createElement("div")

    if (align==="left") {
        messageBox.classList.add("message2")
        messageText.classList.add("m2")
    } else if (align==="right") {
        messageBox.classList.add("message1")
        messageText.classList.add("m1")
    }
    
    messageText.textContent = text

    messageBox.prepend(messageText);
    const messageDiv = document.querySelector(".chat-container")
    messageDiv.classList.add("chat-container")
    document.getElementById("chatContainer").appendChild(messageBox)
}

messageFromAnyone("Ok, let's go on 7 PM." , "right")
messageFromAnyone("See you!" , "left")
messageFromAnyone("Thanks again" , "right")
messageFromAnyone("No problem!" , "left")