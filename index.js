let sliderImages = document.querySelectorAll('.slide'),
arrowLeft = document.querySelector('#arrow-left')
arrowRight = document.querySelector('#arrow-right')
current =0;

// to clear all images
function resetImages(){
  for(i=0; i< sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

// to initialise slider
function startSlide(){
  resetImages();
  sliderImages[0].style.display='block'
}

// show previous image
function slideLeft(){
  resetImages();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

function slideRight (){
  resetImages();
  sliderImages[current + 1].style.display = 'block';
  current ++;
}

// left arrow click
arrowLeft.addEventListener('click', function(){
  if (current ===0){
    current=sliderImages.length;
  }
  slideLeft();
})

// right arrow click
arrowRight.addEventListener('click', function(){
  if(current === sliderImages.length - 1){
    current =-1
  }
  slideRight();
})

startSlide();