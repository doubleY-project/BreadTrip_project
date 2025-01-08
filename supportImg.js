const container = document.querySelector('.supportImgFile');
for (let i = 1; i < 6; i++) {
    // Image 객체 생성
    const img = new Image();
    // src 속성에 파일 주소 지정
    img.src = `/supportImg/${i}.jpg`;
    // 요소에 삽입
    container.appendChild(img);
}