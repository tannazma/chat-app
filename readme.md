

## Briefing

ChatApp is just a local server based chat app with Node.js and the front end is created by Javascript.

ChatApp at first was something like a real-time chat application that involves 2 persons at the same time, but here is the steps I took and the challenges I faced.

This was my first exprience for learning server required and tried to make one local server for myself via Node.js.

## First Step at Server Side
- created a server (app.js) by createServer in the hostname = '127.0.0.1' and port = 3000, and handled incomming requests:

> const  server = http.createServer((req, res) => {
> res.setHeader('Access-Control-Allow-Origin', '*'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
> res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); res.setHeader('Access-Control-Allow-Credentials', true);
console.log(req.url) res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); 
if (req.url === "/ardeshir") { res.end("You are Ardeshir") 
} else  if (req.url === "/tannaz") { res.end("You are Tannaz")}
else { res.end("Nothing") }});

- added listen function to the server for any incomming requests

> server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); });

## The HTML & CSS
- like the picture I created chat-container, input box with the an emoji (creating a search bar with a magnify in it was somehow chalolenging but I fixed it via some CSS like *outline* and *border-style:none* and so on...) and send button.

- added 4 fake messages from the left and right align, via making 2 different classes (message1,massage2 and m1,m2 for the inner div) and calling them in Css with differnct colors.
- 
- 
## The script.js
- fetch some path in script.js like: fetch("http://127.0.0.1:3000/tannaz") to see what happens.
- created a div element, added text content in it and then added it on the m1,m2 classes  in script.js to get the style of the new messages from left or right. Creating a div added to the message1 class, then creating another div with the text and added it to m1 class, and preppend it to the first div (newMessageDiv), then appenedchild it to the body:
document.body.appendChild(newMessageDiv)

> onst  newMessageDiv = document.createElement ("div"); newMessageDiv.textContent="Hello again!";
newMessageDiv.classList.add("message1", "m1")
const  messageFromYou=document.createElement("div")
newMessageDiv.prepend(messageFromYou);
document.body.appendChild(newMessageDiv)

- and in the next step, selectQuery .chatcontainer class and using getElementById for adding and appenedChild the text to the class:

> const  newMessageDiv = document.createElement("div")
newMessageDiv.classList.add("message1"); const  messageFromYou = document.createElement("div"); messageFromYou.textContent="Hello again!" messageFromYou.classList.add("m1"); newMessageDiv.prepend(messageFromYou); const  messageDiv = document.querySelector(".chat-container"); messageDiv.classList.add("chat-container"); document.getElementById("chatContainer").appendChild(newMessageDiv)
