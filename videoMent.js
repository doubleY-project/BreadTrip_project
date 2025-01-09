// Canvas 설정
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');





// 텍스트 애니메이션을 위한 변수 설정
let offsetX = 0;
let canvasPositionY = 0; 

// 윈도우 크기 변경 시 canvas 크기 업데이트
function resizeCanvas() {
  canvas.width = window.innerWidth; 
  canvas.height = window.innerHeight; 

  // 배경 그리기
  ctx.fillStyle = 'white'; 
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 글자 구멍 만들기
  ctx.globalCompositeOperation = 'destination-out'; 
  ctx.font = 'bold 550px Arial'; 
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('welcome to BreadTrip welcome to BreadTrip welcome to BreadTrip', canvas.width / 2 + offsetX * 2.5, canvas.height / 2);
}

// 텍스트 애니메이션을 위한 함수
function animateText() {
  offsetX -= 5; 
  if (offsetX <= -canvas.width) {
    offsetX = canvas.width; 
  }
  resizeCanvas(); 
  requestAnimationFrame(animateText); 
}

// 스크롤 이벤트 처리
function handleScroll() {
  const scrollY = window.scrollY; // 현재 스크롤 위치
  const viewportHeight = window.innerHeight; // 화면 높이

  // 스크롤이 조금이라도 내려가면 캔버스를 숨깁니다.
  if (scrollY > 0) {
    canvas.style.transform = `translateY(-${viewportHeight}px)`; // 캔버스를 화면 밖으로 이동
    canvas.style.opacity = 0; // 캔버스를 완전히 투명하게 만들어서 사라짐
  } else {
    // 스크롤이 최상위에 있을 때만 캔버스를 보여줍니다.
    canvas.style.transform = 'translateY(0)'; // 캔버스를 원위치로
    canvas.style.opacity = 1; // 캔버스를 보이게 설정
  }
}

// 초기 canvas 크기 설정
resizeCanvas();

// 윈도우 크기 변경 시 리사이즈 이벤트 처리
window.addEventListener('resize', resizeCanvas);

// 스크롤 이벤트 등록
window.addEventListener('scroll', handleScroll);

// 애니메이션 시작
animateText();
