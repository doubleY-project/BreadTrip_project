document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.snsListFile');
    const notice = document.querySelector('.notice'); // 부모 요소 가져오기

    // 동적으로 이미지 크기 설정
    const setImageSize = () => {
        requestAnimationFrame(() => { // 레이아웃 업데이트 이후 실행
            const containerWidth = container.clientWidth || notice.clientWidth; // 부모 컨테이너 너비 계산
            const imageWidth = containerWidth / 4; // 이미지를 4개로 나눠서 계산

            const images = document.querySelectorAll('.snsList');
            images.forEach((img) => {
                img.style.width = `${imageWidth}px`;
                img.style.height = `${imageWidth}px`; // 정사각형 유지
            });

            console.log(`Notice width: ${notice.clientWidth}, Container width: ${container.clientWidth}, Image width: ${imageWidth}`);
        });
    };

    // 이미지 추가 및 초기 크기 설정
    for (let i = 1; i < 5; i++) {
        const imgWrapper = document.createElement('div'); // 이미지와 텍스트를 감쌀 div
        imgWrapper.classList.add('imgWrapper'); // 스타일링을 위한 클래스 추가

        const img = new Image();
        img.src = `./imgs/snsList${i}.jpg`;
        img.classList.add('snsList');
        img.style.objectFit = 'cover';

        // 클릭 이벤트 추가
        img.addEventListener('click', () => {
            alert('준비중입니다');
        });

        // "view" 텍스트 추가
        const hoverText = document.createElement('div');
        hoverText.classList.add('hoverText');
        hoverText.textContent = 'view';

        // 요소 추가
        imgWrapper.appendChild(img);
        imgWrapper.appendChild(hoverText);
        container.appendChild(imgWrapper);
    }

    // 초기 이미지 크기 설정
    setImageSize();

    // 화면 크기 변경 시 이미지 크기 재설정
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(setImageSize, 100); // 디바운스를 위해 100ms 딜레이 후 실행
    });
});
