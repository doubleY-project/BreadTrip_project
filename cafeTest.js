const wrapper = document.querySelector('.swiper-wrapper');
const visibleSlides = 4; // 화면에 표시할 슬라이드 개수
const slideWidth = 100 / visibleSlides; // 슬라이드 너비 계산
let currentIndex = 0;

for (let i = 1; i <= 10; i++) {
  // 슬라이드 요소 생성
  const slide = document.createElement('div');
  slide.classList.add('cafeList');

  // 이미지 객체 생성 및 추가
  const img = new Image();
  img.src = `/imgs/cafeList${i}.jpg`; // 이미지 경로 설정
  img.style.width = '100%'; // 이미지가 슬라이드 안에 맞게 채워짐
  img.style.height = 'auto';
  img.style.borderRadius = '10px';

  slide.appendChild(img);
  wrapper.appendChild(slide);
}

// 슬라이드 요소 가져오기
const slides = document.querySelectorAll('.swiper-wrapper .cafeList');
const slideCount = slides.length;

// 슬라이드 크기 설정
slides.forEach(slide => {
  slide.style.flex = `0 0 ${slideWidth}%`;
});

// 슬라이드를 이동시키는 함수
function moveSlider(index) {
  const slideSize = 100 / visibleSlides; // 슬라이드 크기 (%)
  const gapSize = 10 / wrapper.clientWidth * 100; // gap 크기 (%)
  const offset = index * (slideSize + gapSize); // 슬라이드 이동 거리 계산
  wrapper.style.transition = 'transform 0.3s ease-in-out';
  wrapper.style.transform = `translateX(-${offset}%)`;
}

// '다음' 버튼 클릭
document.querySelector('.nextBtn').addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slideCount - visibleSlides + 1) {
    currentIndex = 0; // 무한 루프 효과
  }
  moveSlider(currentIndex);
});

// '이전' 버튼 클릭
document.querySelector('.prevBtn').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideCount - visibleSlides; // 무한 루프 효과
  }
  moveSlider(currentIndex);
});