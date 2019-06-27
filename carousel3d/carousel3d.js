var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;
var bg = document.querySelector('.bg');
function rotateCarousel(){
    var angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-864px) rotateY('+angle+'deg)';
}
var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click',function(){
    selectedIndex--;
    rotateCarousel();
});
var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click',function(){
    selectedIndex++;
    rotateCarousel();
});