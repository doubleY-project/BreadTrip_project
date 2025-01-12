function btClick2() {
    const rightBox = document.querySelector('.rightBox'); 
    const watchBt = document.getElementById("topButton");
    const nameWatch = document.querySelectorAll('.topNames');
    
    let isOpen = false; // 초기 상태는 rightBox 숨김

    // 화면 크기가 반응형 상태일 때만 처리
    const checkScreenSize = () => {
        return window.innerWidth <= 768; // 예시: 768px 이하일 때 반응형 처리
    };

    // 버튼 클릭 이벤트 핸들러
    watchBt.addEventListener('click', () => {
        if (checkScreenSize()) { // 반응형 화면에서만 작동
            isOpen = !isOpen;
            // opacity와 display 속성 토글
            if (isOpen) {
                rightBox.style.opacity = '1';
                rightBox.style.display = 'block'; // opacity가 1일 때는 보이도록 설정
            } else {
                rightBox.style.opacity = '0';
                setTimeout(() => { 
                    if (!isOpen) rightBox.style.display = 'none'; // 애니메이션 후 숨김
                }, 300); // 애니메이션 시간과 맞추어 설정
            }
        }
    });

    // 화면 크기 변경시 rightBox 상태 초기화
    window.addEventListener('resize', () => {
        if (checkScreenSize()) { // 화면 크기가 768px 이하일 때는 rightBox 표시
            rightBox.style.opacity = '1';
            rightBox.style.display = 'block'; // 반응형으로 돌아왔을 때 보이도록 설정
            isOpen = true; // 상태 초기화
        } else { // 화면 크기가 768px 이상일 때는 rightBox 숨김
            rightBox.style.opacity = '0';
            setTimeout(() => {
                rightBox.style.display = 'none'; // 애니메이션 후 숨김
            }, 300); // 애니메이션 시간과 맞추어 설정
            isOpen = false; // 상태 초기화
        }
    });

    // 초기화: 페이지 로드 시 rightBox는 기본적으로 숨김
    rightBox.style.display = 'none';
    rightBox.style.opacity = '0'; // 초기 상태는 숨겨짐
}

// DOM 로드 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    btClick2();
});
