// Events Basics
// Open index.html and work through these in order.

// TODO 1: Select #box, #log, and #key-display.
const box1 = document.querySelector("#box");
const log1 = document.querySelector("#log");
const keyDisplay1 = document.querySelector("#key-display");

// TODO 2: Add a "click" listener on #box that sets log's textContent to
// "Box clicked!". Inside the same listener, console.log() the event's
// event.type and event.target (the event object is the first argument
// your listener function receives).

box1.addEventListener("click", (event) => {
    box1.textContent = "Box clicked!";
    console.log(event.type);
    console.log(event.target);
});


// TODO 3: Add a "mouseover" listener on #box that adds the "hover" class
// to it, and a "mouseout" listener that removes the "hover" class.

box1.addEventListener("mouseover", (event) => {
    box1.classList.add("hover");
})

box1.addEventListener("mouseout", (event) => {
    box1.classList.remove("hover");
})


// TODO 4: Add a "keydown" listener on the whole document. Inside it, set
// key-display's textContent to event.key (the key that was pressed).

document.addEventListener("keydown", (event) => {
        keyDisplay1.textContent = event.key
})

