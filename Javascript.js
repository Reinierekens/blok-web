/*jslint browser:true */

//TOEVOEGEN AAN FAVORIETEN



//var actie = document.querySelector('button.normaal');

//var button = document.querySelector('footer>button.normaal');

//var like = function () {

//actie.classList.toggle('animation');}


//Verander bij klik

//button.addEventListener('click', like);


// Elemeten selecteren


function start() {
    "use strict";

    var element = document.getElementById("favoriet");
    element.classList.toggle("animation");

}



//OFFLINE ZETTEN

//function startDownload() {
//var uno = document.getElementById("offline");
//uno.classList.toggle("download");};

var section = document.querySelector('img.imgg'); // first section element
var button = document.getElementById('offline');

function download() {
    "use strict";
    /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
    section.classList.toggle('download');
}

/* 2. voeg een event toe aan een element */
