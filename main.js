 

var image =Array.from( document.querySelectorAll('.item img')); //to reach the index of (array from)
var imagebox = document.getElementById('imagebox');
var prev = document.getElementById('prev')
var next = document.getElementById('next')
var close = document.getElementById('close');
var mainlayer = document.getElementById('mainlayer');
var indexItem = 0;


for (var i = 0; i < image.length; i++) {
  image[i].addEventListener('click', function (e) {

    document.getElementById("mainlayer").style.display = 'flex';
    var currentImage = imagebox.style.backgroundImage = `url(${e.target.src})`;
    indexItem= image.indexOf(this); // بتقولي ع الماكن اللي واقف عليه
    console.log(indexItem);

  })
}

// to go right form the arrow
next.addEventListener('click' , nextImage);
function nextImage(){
    indexItem++;
    if(indexItem >image.length - 1){
      //  or ======>>>>>   if(indexItem == image.length)
      indexItem = 0;
    }
    imagebox.style.backgroundImage = `url(${image[indexItem].src})`
 }

// to go left means the previos slide form the arrow
 prev.addEventListener('click', prevImage);

 function prevImage(){

  indexItem--;
  if(indexItem < 0){
      indexItem = image.length - 1;
  }
  imagebox.style.backgroundImage = `url(${image[indexItem].src})`
  console.log(indexItem);
 }


 // to close the imagebox 
close.addEventListener('click', function () {
  document.getElementById("mainlayer").style.display = 'none';
})

// key from keyboard we using the Document 
//to slide from the keyboard ex: escap , arrowleft and arrowright
document.addEventListener('keyup', function (e) {

  if (e.key === "Escape") {
    document.getElementById("mainlayer").style.display = 'none';
  }
  else if (e.key === "ArrowRight" || e.key === "d") {
    nextImage();
  }
  else if (e.key === "ArrowLeft"|| e.key === "a") {
    prevImage();
  };
});


 //layer to close layer
// to close the image box when click out the work space
mainlayer.addEventListener('click' ,function(e){
  document.getElementById("mainlayer").style.display = 'none';



  
})
  imagebox.addEventListener('click' ,function(e){

  e.stopPropagation();
})