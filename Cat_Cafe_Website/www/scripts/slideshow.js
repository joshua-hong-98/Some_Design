// $(function(){
//     $('#slidshow img:gt(0)').hide();
//     setInterval(function(){
//       $('#slideshow :first-child').fadeOut()
//          .next('img').fadeIn()
//          .end().appendTo('#slideshow');},
//       3000);
// });

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');
},  4000);
