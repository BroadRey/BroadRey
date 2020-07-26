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
let readMoreText = document.querySelector('.read-more__text');
let brandsContainer = document.querySelector('.brands-container');
let brandsWrapper = document.querySelector('.brands-wrapper');
let readMoreArrows = document.querySelector('.read-more__arrows');
let readMoreContainer = document.querySelector('.read-more');

readMoreText.addEventListener('click', function() {
    //invisibleBrandLinks[i].classList.toggle('brands-container__link--invisible');
    if (getComputedStyle(brandsWrapper).height === '184px') {
      brandsWrapper.style.height = '272px';
      readMoreContainer.style.paddingTop = '46px';
      readMoreArrows.style.transform = 'rotate(180deg)';
      readMoreText.textContent = 'Скрыть';
    } else {
      brandsWrapper.style.height = '184px';
      readMoreArrows.style.transform = 'rotate(0deg)';
      readMoreText.textContent = 'Показать все';
    }
  

  for (let i = 0; i < allBrandLinks.length; i++) {  
    allBrandLinks[i].classList.toggle('brands-container--appearance');
  }

});