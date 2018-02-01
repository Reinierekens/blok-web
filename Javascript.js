/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*//TOEVOEGEN AAN FAVORIETEN



var actie = document.querySelector('button.normaal');

var button = document.querySelector('footer>button.normaal');

var like = function () {

    button.classList.toggle('animation');
    //}


    //Verander bij klik

    button.addEventListener('click', like);


    // Elemeten selecteren
*/

function start() {
    "use strict";

    var element = document.querySelector("button.normaal");
    element.classList.toggle("animation");

}

//OFFLINE ZETTEN

var section = document.querySelector('img.gelukt');
var button = document.getElementById('offline');

function download() {
    "use strict";

    section.classList.toggle('download');
}

//BEOORDELEN

var section = document.querySelector('section+section>p');
var button = document.querySelector('active fa fa-star');

function beoordeling() {
    "use strict";

    section.classList.toggle('beoordeeld');
}
