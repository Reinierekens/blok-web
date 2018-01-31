// SELECT ELEMENTS
var hart = document.querySelector('button.dance');
var button = document.querySelector('header a img');

// TOGGLE CLASS FUNCTION
var animatie = function () {
    hart.classList.toggle('dancing');
};

// ADD EVENT
button.addEventListener('click', animatie);
