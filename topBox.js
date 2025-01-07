// 메뉴버튼 클릭 함수
function btClick() {
    const nameWatch = document.querySelectorAll('.topName');
    const topDate = document.querySelector('.topDate');
    const topNames = document.getElementById('topNames');
    const watchBt = document.getElementById('topButton');

    let isOpen = true;
    watchBt.addEventListener('click', () => {
        isOpen = !isOpen;

        // .topName 요소 숨기기/보이기
        nameWatch.forEach((item) => {
            item.style.display = isOpen ? 'block' : 'none';
        });

        // .topDate 업데이트 및 표시/숨기기
        if (!isOpen) {
            const today = new Date();
            const hours = ('0' + today.getHours()).slice(-2);
            const minutes = ('0' + today.getMinutes()).slice(-2);
            topDate.textContent = `( korea, ${hours}:${minutes} )`;
            topDate.style.display = 'block';

            // 가운데 위치 계산
            const parentWidth = topNames.offsetWidth;
            const parentHeight = topNames.offsetHeight;
            const dateWidth = topDate.offsetWidth;
            const dateHeight = topDate.offsetHeight;

            topDate.style.position = 'absolute';
            topDate.style.left = `${(parentWidth - dateWidth) / 2}px`;
            topDate.style.top = `${(parentHeight - dateHeight) / 2}px`;
        }
        else {
            topDate.style.display = 'none';
        }
    });
}

// 초기화 함수 실행
btClick();