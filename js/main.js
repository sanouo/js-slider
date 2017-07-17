

// first test
// var images = ["ciel.jpg", "lune.jpg", "montagne.jpg", "tempete.jpg"];
// var i = 0;
//
// setInterval(function(){
//   document.getElementByClassName("slides").src = images[i];
//   i++
//   if (i > images.length){
//     i = 0;
// }
// },2000);



// second test
// var images = ["ciel.jpg", "lune.jpg", "montagne.jpg", "tempete.jpg"];
//
// var number = 0;
// var imageLength = images.length -1;
//
// function changeImage(x){
//   number ++;
//   if (number > images.Length){
//     number = 0;
//   }
//
//   if (number < 0){
//     number = images.Length;
//   }
//
//
// document.getElementById("test").src = images[number];
//
// return false;
// }
//
//
// function autoRun (){
//   setInterval ("changeImage(1)",5000);
// }





// var index = 1;
// function plusIndex(n){
//   index = index + 1;
//   showImage(index);
// }
// showImage(1);
// function showImage(n){
//   var i;
//   var x = document.getElementByClassName("slides");
//   if(n > x.length)
//   {index = 1};
//
//   if(n < 1)
//   {index = x.length};
//
//   for (i = 0; i < x.length; i++)
//   {
//     x[i].style.display = "none";
//   }
//   x[index-1].style.display = "block";
// }
//
//
//
// autoSlide();
// function autoSlide(){
//   var i;
//   var x = document.getElementByClassName("slides");
//   for (i = 0; i < x.length; i++)
//
//   {
//     x[i].style.display = "none";
//   }
//   if(index > x.length)
//   {index = 1}
//   x[index-1].style.display = "block";
//   index++
//   setTimeout(autoSlide,2000);
// }




var index = 1;

function plusIndex(n){
index = index + 1;
showImage(index);
}

showImage(1);

function showImage(n){
var i;
var x = document.getElementsByClassName("slides");
if(n > x.length){ index = 1};
if(n < 1){ index = x.length};
for(i=0;i<x.length;i++)
{
x[i].style.display = "none";
}
x[index-1].style.display = "block";
}
autoSlide();
function autoSlide(){
var i;
var x = document.getElementsByClassName("slides");
for(i=0;i<x.length;i++){
x[i].style.display = "none";
}
index++;
if(index > x.length){index = 1}
x[index-1].style.display = "block";
setTimeout(autoSlide,2000);

} 
