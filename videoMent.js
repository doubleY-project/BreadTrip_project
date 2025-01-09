// Canvas 설정
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 텍스트 애니메이션을 위한 변수 설정
let offsetX = 0;
let canvasPositionY = 0; // 캔버스의 Y 위치를 관리

// 윈도우 크기 변경 시 canvas 크기 업데이트
function resizeCanvas() {
  canvas.width = window.innerWidth; 
  canvas.height = window.innerHeight;

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = 'destination-out'; 
  ctx.font = 'bold 550px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('welcome to BreadTrip welcome to BreadTrip welcome to BreadTrip', canvas.width / 2 + offsetX * 2.5, canvas.height / 2);
}

// 텍스트 애니메이션을 위한 함수
function animateText() {
  offsetX -= 2; // 왼쪽으로 텍스트 이동
  if (offsetX <= -canvas.width) {
    offsetX = canvas.width; // 텍스트가 화면을 벗어나면 다시 오른쪽에서 시작
  }
  resizeCanvas(); // 캔버스를 다시 그리기
  requestAnimationFrame(animateText); // 애니메이션 반복
}

// 스크롤 이벤트 처리
let prevScrollPos = window.pageYOffset; // 이전 스크롤 위치

function handleScroll() {
  const scrollY = window.scrollY; // 현재 스크롤 위치
  const viewportHeight = window.innerHeight; // 화면 높이

  // 스크롤 방향에 따라 캔버스 표시 여부 변경
  if (scrollY > prevScrollPos) {
    // 스크롤을 내리면 canvas를 점차적으로 투명하게 만듭니다.
    canvas.style.opacity = 0; // 서서히 사라지게 하려면 opacity를 0으로 설정
  } else {
    // 스크롤을 올리면 canvas를 다시 보이게 만듭니다.
    canvas.style.opacity = 1; // 다시 완전히 보이게 설정
  }

  prevScrollPos = scrollY; // 이전 스크롤 위치 갱신
}

// 초기 canvas 크기 설정
resizeCanvas();

// 윈도우 크기 변경 시 리사이즈 이벤트 처리
window.addEventListener('resize', resizeCanvas);

// 스크롤 이벤트 등록
window.addEventListener('scroll', handleScroll);

// 애니메이션 시작
animateText();
