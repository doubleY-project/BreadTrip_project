const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const mainDate = document.querySelector(".mainDate");
const ddaySet = document.getElementById("remain-Time");

mainDate.style.opacity = 0;
ddaySet.style.opacity = 0;

let offsetX = 0;

// canvas 크기 조정
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "destination-out";
    ctx.font = "bold 550px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
        "Welcome to BreadTrip",
        canvas.width / 2 + offsetX * 2.5,
        canvas.height / 2
    );
}

function animateText() {
    offsetX -= 5;
    if (offsetX <= -canvas.width) {
        offsetX = canvas.width;
    }
    resizeCanvas();
    requestAnimationFrame(animateText);
}

function handleScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollY > 0) {
        canvas.style.transform = `translateY(-${viewportHeight}px)`;
        canvas.style.opacity = 0;

        mainDate.style.opacity = 1;
        ddaySet.style.opacity = 1;

        // diffDay 강제 호출 및 초기화
        window.diffDay();
    } else {
        canvas.style.transform = "translateY(0)";
        canvas.style.opacity = 1;

        mainDate.style.opacity = 0;
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
