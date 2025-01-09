document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.snsListFile');

    // 동적으로 이미지 크기 설정
    const setImageSize = () => {
        const containerWidth = container.offsetWidth; // 부모 컨테이너 너비 계산
        const imageWidth = containerWidth / 4; // 이미지를 3개로 나눠서 계산
        const images = document.querySelectorAll('.snsList');

        images.forEach((img) => {
            img.style.width = `${imageWidth}px`;
            img.style.height = `${imageWidth}px`; // 정사각형 유지
        });
    };

    // 이미지 추가 및 초기 크기 설정
    for (let i = 1; i < 5; i++) {
        const img = new Image();
        img.src = `./imgs/snsList${i}.jpg`;
        img.classList.add('snsList');
        img.style.objectFit = 'cover'; // 이미지 비율 유지하며 크기에 맞게 조정
        container.appendChild(img);
    }

    setImageSize(); // 초기 이미지 크기 설정

    // 화면 크기 변경 시 이미지 크기 재설정 (즉시 반영)
    window.addEventListener('resize', setImageSize);
});
