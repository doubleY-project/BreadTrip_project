function btClick2() {
    const rightBox = document.querySelector('.rightBox'); 
    const watchBt = document.getElementById("topButton");
    let isOpen = false; // 초기 상태는 rightBox 숨김

    // 반응형 화면 크기 조건
    const isResponsive = () => window.innerWidth <= 768;

    // rightBox 상태 업데이트 함수
    const updateRightBox = (open) => {
        isOpen = open;
        if (isOpen) {
            rightBox.style.opacity = '1';
            rightBox.style.display = 'block';
        } else {
            rightBox.style.opacity = '0';
            setTimeout(() => {
                if (!isOpen) rightBox.style.display = 'none';
            }, 300); // 애니메이션 시간
        }
    };

    // 버튼 클릭 이벤트 핸들러
    watchBt.addEventListener('click', () => {
        if (isResponsive()) {
            updateRightBox(!isOpen); // 상태 토글
        }
    });

    // 화면 크기 변경 시 상태 초기화
    window.addEventListener('resize', () => {
        if (isResponsive()) {
            updateRightBox(true); // 반응형 화면에서는 항상 보임
        } else {
            updateRightBox(false); // 비반응형 화면에서는 항상 숨김
        }
    });

    // 초기화: 페이지 로드 시 기본 상태
    updateRightBox(false); // rightBox 숨김
}

// DOM 로드 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    btClick2();
});
