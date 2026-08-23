// Write your demo code here, section by section.
// The HTML file has matching ids/classes for each topic:
console.log(document.getElementById("main-title"));
// 1. Selecting Elements   -> #main-title, .submit-btn, .task
// 2. Modifying Content    -> .label, #msg, #card
document.getElementById("msg").innerHTML = `<strong>TEST</strong>`;
//document.getElementById("card").innerHTML = `<strong>TESTeiei</strong>`
document.querySelector(".label").textContent = 'Hello Im changed';
// 3. classList            -> #themeBtn, .card
// 4. Create & Remove      -> #addTaskBtn, #resetTasksBtn, #tasks
// 5. Events               -> #click-me, #list, #signupForm, #email, .error
// 6. Pokémon Card Fetcher -> #fetchBtn, #resetBtn, #gallery

console.log(document.getElementById("modify-name"));

const testA = document.getElementById("modify-name");

const innertest = document.getElementById("card");
innertest.innerHTML = `<img src="https://f.ptcdn.info/128/040/000/o2l7ccf3rW94vF2yPIT-o.jpg" />`;
