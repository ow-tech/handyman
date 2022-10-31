// $(function(){
//   $("#nav-placeholder").load("nav.html");
// });
$.get("nav.html", function(data){
  $("#nav-placeholder").replaceWith(data);
});


$.get("whatsapp.html", function(data){
  $("#whatsapp-placeholder").replaceWith(data);
});

$.get("contact.html", function(data){
  $("#contact-placeholder").replaceWith(data);
});


$.get("footer.html", function(data){
  $("#footer-placeholder").replaceWith(data);
});
// Get the container element

// handle class active of nav
// let btnContainer = document.getElementById("nav-ul");

// Get all buttons with class="btn" inside the container
// let btns = btnContainer.getElementsByClassName("nav-a");

// // Loop through the buttons and add the active class to the current/clicked button
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     // alert('been clicked')
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

$(document).ready(function () {
  $(".nav li ").click(function (e) {
    $(".nav li ").removeClass("active");

    let $parent = $(this).parent();
    $parent.addClass("active");
    e.preventDefault();
  });
});
$('.navis').on('click', 'li', function(){
  $('.navis li.active').removeClass('active');
  $(this).addClass('active');
});

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});




