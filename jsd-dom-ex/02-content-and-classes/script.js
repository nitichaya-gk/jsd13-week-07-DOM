// Content, Attributes & Classes
// Open index.html and work through these in order.

// TODO 1: Select #heading and change its textContent to "Welcome!"
const todo1 = document.querySelector('#heading');
todo1.textContent = 'Welcome!';

// TODO 2: Select #bio (it currently reads "I am learning the DOM."). Set its
// innerHTML so the word "learning" is wrapped in a <strong> tag, i.e. the
// paragraph should read: I am <strong>learning</strong> the DOM.

const todo2 = document.querySelector('#bio');
todo2.innerHTML = 'I am <strong>learning</strong>';


// TODO 3: Select #card. Read its "class" attribute with getAttribute and
// console.log() it.
const todo3 = document.getElementById("card").getAttribute("class");
console.log(todo3);



// TODO 4: Add the "highlight" class to #card using classList.add, then
// console.log(card.className) to see it there. (You'll learn to do this in
// response to a click in the next exercise, 03-events-basics.)

const todo4 = document.getElementById("card");
todo4.classList.add("highlight");

console.log(todo4.className);


// TODO 5: #card starts with a data-visits="0" attribute. Read the current
// value with card.dataset.visits, convert it to a number, add 1, write it
// back to card.dataset.visits, and console.log() the new value.

const todo5 = document.getElementById("card");
const current = parseInt(todo5.dataset.visits);
const updated = current + 1;
todo5.dataset.visits = updated;
console.log(card.dataset.visits);



