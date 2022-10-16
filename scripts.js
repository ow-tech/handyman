$(function(){
  $("#nav-placeholder").load("nav.html");
});

// Get the container element

// handle class active of nav
let btnContainer = document.getElementById("nav-ul");

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("nav-a");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // alert('been clicked')
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(document).ready(function () {
  $(".nav li a").click(function (e) {
    $(".nav li a").removeClass("active");

    let $parent = $(this).parent();
    $parent.addClass("active");
    e.preventDefault();
  });
});




