// const exampleSocket = new WebSocket("wss://www.example.com/socketserver", "protocolOne");
// exampleSocket.onopen = (event) => {
//     exampleSocket.send("Here's some text that the server is urgently awaiting!");
// };
// exampleSocket.onmessage = (event) => {
//     var message = JSON.parse(event.data);
//     console.log(message);
// }

const size = 10;
let canvasData = new Map();
let canvasElement = document.getElementById("canvas");
let canvas = '';
for(let i = 0; i < size; i++) {
    let row = '<div class="row">';
    for(let j = 0; j < size; j++) {
        row += `<div class="cell" onclick="dig(this, ${i}, ${j})"></div>`;
        canvasData.set(`${i}-${j}`, 4);
    }
    row += '</div>';
    canvas += row;
}
canvasElement.innerHTML = canvas;

function dig(element, i, j) {
    console.log(`Dug: ${i},${j}`);
    let key = `${i}-${j}`;
    let value = canvasData.get(key);
    value--;
    canvasData.set(key, value);
    element.style.backgroundColor = `#${value}${value}${value*2}${value*2}ff`;
    // send data change to websocket server
    // exampleSocket.send("json data");
}

