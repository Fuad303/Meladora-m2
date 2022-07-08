var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
  } );
  
  splide.mount();