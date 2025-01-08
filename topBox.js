function btClick() {
    const nameWatch = document.querySelectorAll('.topName');
    const topDate = document.querySelector('.topDate');
    const topNames = document.getElementById('topNames');
    const watchBt = document.getElementById('topButton');

    let isOpen = true;

    // 가운데 위치 설정 함수
    const centerElement = () => {
        const parentWidth = topNames.offsetWidth;
        const parentHeight = topNames.offsetHeight;
        const dateWidth = topDate.offsetWidth;
        const dateHeight = topDate.offsetHeight;

        topDate.style.position = 'absolute';
        topDate.style.left = `${(parentWidth - dateWidth) / 2}px`;
        topDate.style.top = `${(parentHeight - dateHeight) / 2}px`;
    };

    // 날짜 업데이트 함수
    const updateDate = () => {
        const today = new Date();
        const hours = ('0' + today.getHours()).slice(-2);
        const minutes = ('0' + today.getMinutes()).slice(-2);
        topDate.textContent = `( Korea, ${hours}:${minutes} )`;
    };

    // 버튼 클릭 이벤트 핸들러
    watchBt.addEventListener('click', () => {
        isOpen = !isOpen;

        // .topName 요소 숨기기/보이기
        nameWatch.forEach(item => {
            item.style.display = isOpen ? 'block' : 'none';
        });

        // .topDate 표시/숨기기
        if (!isOpen) {
            updateDate();
            topDate.style.display = 'block';
            requestAnimationFrame(centerElement);
        } else {
            topDate.style.display = 'none';
        }
    });

    // 초기화
    updateDate();
    topDate.style.display = 'none';
    requestAnimationFrame(centerElement);
}

// 초기화 함수 실행
btClick();