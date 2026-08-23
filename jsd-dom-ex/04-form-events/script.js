// Form Events
// Open index.html and work through these in order.

// TODO 1: Select #signup-form, #name-input, #char-count, and #feedback.
const signupForm1 = document.querySelector("#signup-form")
const nameInput1 = document.querySelector("#name-input")
const charCount1 = document.querySelector("#char-count")
const feedback1 = document.querySelector("#feedback")

// TODO 2: Add an "input" listener on #name-input. Every time the user types,
// set char-count's textContent to the current length of the input's value
// (name-input.value.length).


nameInput1.addEventListener("input", (e) => {
    charCount1.textContent = nameInput1.value.length;
});

// TODO 3: Add a "submit" listener on #signup-form. Inside it:
//   - call event.preventDefault() so the page doesn't reload
//   - read and trim the name input's value
//   - if it's empty, set feedback's textContent to "Name required"
//   - otherwise, set feedback's textContent to `Welcome, ${name}!`

signupForm1.addEventListener("submit", (e) => {
    e.preventDefault();
    nameInput1.trim;
    if (nameInput1.value === "") {
        feedback1.textContent = "Name required";
    }
    else {
        feedback1.textContent = `Welcome, ${nameInput1.value}!`;
    }
});
