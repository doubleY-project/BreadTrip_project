document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.snsListFile');

    // 동적으로 이미지 크기 설정
    const setImageSize = () => {
        const containerWidth = container.clientWidth; // 부모 컨테이너 너비 계산
        const imageWidth = containerWidth / 4; // 이미지를 4개로 나눠서 계산
        const images = document.querySelectorAll('.snsList');

        images.forEach((img) => {
            img.style.width = `${imageWidth}px`;
            img.style.height = `${imageWidth}px`; // 정사각형 유지
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

    // 화면 크기 변경 시 이미지 크기 재설정 (즉시 반영)
    window.addEventListener('resize', setImageSize());
});
