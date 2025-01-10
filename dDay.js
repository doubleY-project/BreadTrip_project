const dday = new Date("September 28, 2024").setHours(0, 0, 0, 0); // D-day 설정

function countingType2(finalValue) {
    const element = document.querySelector("#number2") || document.querySelector("#remain-Time");

    // 숫자 초기화
    element.innerHTML = "0";

    let current = 0; // 초기값
    const duration = 2000; // 애니메이션 지속 시간 (2초)
    const interval = 10; // 업데이트 간격 (ms)
    const step = finalValue / (duration / interval); // 매 업데이트마다 증가량

    const timer = setInterval(() => {
        current += step; // 숫자 증가
        if (current >= finalValue) {
            current = finalValue; // 최종값에 도달하면 종료
            clearInterval(timer);
        }
        element.innerHTML = Math.floor(current); // 정수로 업데이트
    }, interval);
}

function diffDay() {
    const todayDate = new Date().setHours(0, 0, 0, 0); // 현재 시간 가져오기
    const gap = dday - todayDate; // D-day까지 남은 시간 계산
    const diffDay = Math.ceil(gap / (1000 * 60 * 60 * 24)); // 남은 일수 계산
    const element = document.getElementById("remain-Time");

    if (gap > 0) {
        element.innerHTML = `D - <span id="number2"></span>`;
        countingType2(diffDay);
    } else if (gap === 0) {
        element.innerHTML = "D-Day";
    } else {
        const limitedDiffDay = Math.max(diffDay, 99);
        element.innerHTML = `D + <span id="number2"></span>`;
        countingType2(Math.abs(limitedDiffDay));
    }
}

// diffDay를 전역에 노출
window.diffDay = diffDay;