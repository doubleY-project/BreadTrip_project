function btClick2() {
    const rightBox = document.querySelector('.rightBox'); 
    const topBtImg = document.getElementById("topBtImg");
    const watchBt = document.getElementById("topButton");
    
    let isOpen = false; // 초기 상태는 rightBox 숨김

    // 화면 크기가 반응형 상태일 때만 처리
    const checkScreenSize = () => {
        return window.innerWidth <= 768; // 예시: 768px 이하일 때 반응형 처리
    };

    // 버튼 클릭 이벤트 핸들러
    topBtImg.addEventListener('click', () => {
        if (checkScreenSize()) { // 반응형 화면에서만 작동
            isOpen = !isOpen;
            rightBox.style.display = isOpen ? 'block' : 'none';
        }
    });

    // 초기화: 페이지 로드 시 rightBox는 기본적으로 숨김
    rightBox.style.display = 'none';
}

// DOM 로드 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    btClick2();
});
