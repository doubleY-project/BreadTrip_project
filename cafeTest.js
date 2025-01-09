// Canvas 설정 
const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d'); 

// 배경 그리기 (처음에는 배경 흰색)
ctx.fillStyle = 'white'; // 흰색 배경
ctx.fillRect(0, 0, canvas.width, canvas.height); 

// 글자 구멍 만들기
ctx.globalCompositeOperation = 'destination-out'; // 구멍을 내는 합성 모드 
ctx.font = 'bold 100px Arial'; // 글자 스타일
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillText('Welcome to Bread Trip', canvas.width / 2, canvas.height / 2); 

// 애니메이션을 통해 텍스트 구멍 만들기 (글자 뒤에 있는 비디오가 보이게)
function animateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 이전 프레임 지우기
  ctx.fillStyle = 'white'; // 배경 흰색
  ctx.fillRect(0, 0, canvas.width, canvas.height); // 다시 배경 그리기

  // 글자 구멍 만들기
  ctx.globalCompositeOperation = 'destination-out'; // 구멍을 내는 합성 모드 
  ctx.font = 'bold 100px Arial'; // 글자 스타일
  ctx.textAlign = 'center'; 
  ctx.textBaseline = 'middle'; 
  ctx.fillText('Welcome to Bread Trip', canvas.width / 2, canvas.height / 2);
  
  requestAnimationFrame(animateCanvas); // 애니메이션 반복
}

animateCanvas(); // 애니메이션 시작