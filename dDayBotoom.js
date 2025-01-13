const dDay2 = new Date("September 28, 2024").setHours(0, 0, 0, 0); // D-day 설정

function diffDay2() {
    const todayDate = new Date().setHours(0, 0, 0, 0); // 현재 시간 가져오기
    const gap = dDay2 - todayDate; // D-day까지 남은 시간 계산
    const diffDay2 = Math.ceil(gap / (1000 * 60 * 60 * 24)); // 남은 일수 계산
    const plusMinus = document.querySelector(".dDayShape");
    const element = document.querySelector(".countdown-text");

    if (gap > 0) {
        // D-day 이전일 경우
        plusMinus.innerHTML = "D Day";
        element.innerHTML = `<span>-${diffDay2}</span>`; 
    } else if (gap === 0) {
        // D-day 당일일 경우
        element.innerHTML = "D-Day"; // D-Day 표시
    } else {
        // D-day 이후일 경우
        const limitedDiffDay2 = Math.min(Math.abs(diffDay2), 99); // 99일 이상일 경우 99로 제한
        plusMinus.innerHTML = "D Day";
        element.innerHTML = `<span><b>${limitedDiffDay2 === 99 ? "+99" : limitedDiffDay2}</b></span>`; // D + 99+로 표시
    }
}

// diffDay를 전역에 노출
window.diffDay2 = diffDay2;

// 페이지가 로드될 때 diffDay 실행
window.onload = function() {
    diffDay2();
};
