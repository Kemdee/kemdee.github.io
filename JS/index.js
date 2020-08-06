// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("head").style.backgroundColor = "rgb(0, 1, 29, 0.99)";
    document.getElementById("head").style.height = "60px";
    document.getElementById("log").style.height = "40px";
    document.getElementById("log").style.top = "10px";
    document.getElementById("u").style.top = "7px";
    document.getElementById("dc").style.top = "36px";
  } else {
    document.getElementById("head").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("head").style.height = "100px";
    document.getElementById("log").style.height = "50px";
    document.getElementById("log").style.top = "30px";
    document.getElementById("u").style.top = "30px";
    document.getElementById("dc").style.top = "50px";
  }
}


