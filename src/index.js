import "./styles/main.scss";

$(window).scroll(function(){
  if($(window).scrollTop() > (0.75 * $(window).height())){
    $("nav").addClass("bg-dark-scroll");
  } else {
    $("nav").removeClass("bg-dark-scroll");
  }
});