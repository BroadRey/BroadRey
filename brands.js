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

let readMoreText = document.querySelector('.read-more__text');
let brandsWrapper = document.querySelector('.brands-wrapper');
let readMoreArrows = document.querySelector('.read-more__arrows');
let readMoreContainer = document.querySelector('.read-more');
let readMoreButton = document.querySelector('.read-more__button');

readMoreButton.addEventListener('click', function() {
    if (getComputedStyle(brandsWrapper).height === '184px') {
      brandsWrapper.style.height = '272px';
      readMoreContainer.style.paddingTop = '46px';
      readMoreContainer.style.paddingBottom = '14px';
      readMoreArrows.style.transform = 'rotate(180deg)';
      readMoreText.textContent = 'Скрыть';  
    } else {
      brandsWrapper.style.height = '184px';
      readMoreArrows.style.transform = 'rotate(0deg)';
      readMoreText.textContent = 'Показать все';
      readMoreContainer.style.paddingBottom = '34px';
      readMoreContainer.style.paddingTop = '24px';
    }
});