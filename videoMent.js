const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 2D로 작업

const ddaySet = document.getElementById("remain-Time");
ddaySet.style.opacity = 0;

let offsetX = 0;

// canvas 크기 조정 및 캔버스의 글자를 투명하게 겹치게 하는 함수
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "destination-out"; // 그리기 연산방식 설정
    ctx.font = "bold 550px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
        "Welcome to BreadTrip",
        canvas.width / 2 + offsetX * 2.5,
        canvas.height / 2
    );
}

// 화면의 왼쪽 끝으로 이동하면 오르쪽 끝으로 초기화되는 함수
function animateText() {
    offsetX -= 5;
    if (offsetX <= -canvas.width) {
        offsetX = canvas.width;
    }
    resizeCanvas();
    requestAnimationFrame(animateText);
}

// 아래로 스크롤되면 캔버스는 올라가게 되고 dday 가 나옴, 위로 스크롤 되면 반대로 되는 함수
function handleScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollY > 0) {
        canvas.style.transform = `translateY(-${viewportHeight}px)`;
        canvas.style.opacity = 0;
        ddaySet.style.opacity = 1;
        window.diffDay();

    } else {
        canvas.style.transform = "translateY(0)";
        canvas.style.opacity = 1;
        ddaySet.style.opacity = 0;
    }
}

// DOMContentLoaded 이벤트 대기
document.addEventListener("DOMContentLoaded", () => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll);
    animateText();
});
