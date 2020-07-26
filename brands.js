let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
})

let allBrandLinks = document.querySelectorAll('.brands-container__link');
//let invisibleBrandLinks = document.querySelectorAll('.brands-container__link:nth-child(n+7)');
let readMoreButton = document.querySelector('.read-more__button');
let brandsContainer = document.querySelector('.brands-container');

readMoreButton.addEventListener('click', function() {
    //invisibleBrandLinks[i].classList.toggle('brands-container__link--invisible');
    if (getComputedStyle(brandsContainer).height === '184px') {
      brandsContainer.style.height = '272px';
    } else {
      brandsContainer.style.height = '184px';
    }
  

  for (let i = 0; i < allBrandLinks.length; i++) {  
    allBrandLinks[i].classList.toggle('brands-container--appearance');
  }

});