// JavaScript source code
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }

   
    slides[slideIndex - 1].style.display = "inline-block";
    /* try add one element and access it and change its src attribute */
    /* var d = document.getElementById("img");
    d.style.display = "none";
    d.src = "";
    d.style.display = "block";*/
}