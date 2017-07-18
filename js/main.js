var index = 1;

function plusIndex(n){
index = index + 1;
showImage(index);
}

showImage(1);

function showImage(n){
var i;
var slide = document.getElementsByClassName("slides");
if(n > slide.length){ index = 1};
if(n < 1){ index = slide.length};
for(i=0;i< slide.length;i++)
{
slide[i].style.display = "none";
}
slide[index-1].style.display = "block";
}
autoSlide();
function autoSlide(){
var slide = document.getElementsByClassName("slides");
for(i=0;i< slide.length;i++){
slide[i].style.display = "none";
}
index++;
if(index > slide.length){index = 1}
slide[index-1].style.display = "block";
setTimeout(autoSlide,3000);
}
