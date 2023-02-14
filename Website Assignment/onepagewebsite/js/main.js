function openmodal() {
    document.getElementById("mymodal").style.display = "block";
}

function closemodal() {
    document.getElementById("mymodal").style.display = "none";
}

var slideindex = 1;
showslide(slideindex);

function plusslide(n) {
    showslide(slideindex += n);
}

function currentslide(n) {
    showslide(slideindex = n);
}

function showslide(n) {
    var i;
    var slide = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("lightpic");
    var captiontext = document.getElementById("caption");
    if (n > slide.length) {slideindex = 1}
    if (n < 1) {slideindex = slide.length}
    for (i=0; i <slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slide[slideindex-1].style.display = "block";
    dots[slideindex-1].className += " active";
    captiontext.innerHTML = dots[slideindex-1].alt;
}


