const wrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const slideCount = slides.length;
const visibleSlides = 4; // 화면에 표시할 슬라이드 개수
const slideWidth = 100 / visibleSlides; // 슬라이드 너비 계산
let currentIndex = 0;

// 슬라이드 크기 설정
slides.forEach(slide => {
  slide.style.width = `${slideWidth}%`;
});

// 슬라이드를 이동시키는 함수
function moveSlider(index) {
  wrapper.style.transition = 'transform 0.3s ease-in-out';
  wrapper.style.transform = `translateX(-${index * slideWidth}%)`;
}

// '다음' 버튼 클릭
document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slideCount - visibleSlides + 1) {
    currentIndex = 0; // 무한 루프 효과
  }
  moveSlider(currentIndex);
});

// '이전' 버튼 클릭
document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideCount - visibleSlides; // 무한 루프 효과
  }
  moveSlider(currentIndex);
});
