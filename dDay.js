
const dday = new Date("September 28, 2024").setHours(0, 0, 0, 0); // D-day 설정

let isCounting = false; // 현재 카운트 중인지 확인하기 위한 플래그
let hasCounted = false; // 한 번 카운트 완료 여부 확인

// 카운트 진행 함수
function countingType(finalValue) {
    const element = document.querySelector("#number") || document.querySelector("#remain-Time");
    

    // 숫자 초기화
    element.innerHTML = "00";

    let current = 0; // 초기값
    const duration = 2000; // 애니메이션 지속 시간 (2초)
    const interval = 10; // 업데이트 간격 (ms)
    const step = finalValue / (duration / interval); // 매 업데이트마다 증가량

    isCounting = true; // 카운트 시작
    const timer = setInterval(() => {
        current += step; // 숫자 증가
        if (current >= finalValue) {
            current = finalValue; // 최종 값에 도달하면 종료
            clearInterval(timer);
            isCounting = false; // 카운트 종료
            hasCounted = true; // 한 번 카운트 완료
        }
        element.innerHTML = Math.floor(current); // 정수로 업데이트
    }, interval);
}

// D-day 차이 계산 함수
function diffDay() {
    const todayDate = new Date().setHours(0, 0, 0, 0); // 현재 시간 가져오기
    const gap = dday - todayDate; // D-day까지 남은 시간 계산
    const diffDay = Math.ceil(gap / (1000 * 60 * 60 * 24)); // 남은 일수 계산
    const element = document.getElementById("remain-Time");

    const plusMinus = document.querySelector(".dDayShape");
    const elementBt = document.querySelector(".countdown-text");

    if (gap > 0) { // D-day 이전일 경우
        element.innerHTML = `D - <span id="number"></span>`;
        plusMinus.innerHTML = "D Day";
        elementBt.innerHTML = `<span><b>-${diffDay}</b></span>`; 
        countingType(diffDay);
    } else if (gap === 0) { // D-day 당일일 경우
        element.innerHTML = "D-Day";
        elementBt.innerHTML = "D-Day";
    } else { // D-day 이후일 경우
        const limitedDiffDay = Math.max(diffDay, 99); // 최대 99로 제한
        if (!hasCounted) {
            element.innerHTML = `D + <span id="number"><b></b></span>`;
            countingType(Math.abs(limitedDiffDay));
        }
        plusMinus.innerHTML = "D Day";
        elementBt.innerHTML = `<span><b>${limitedDiffDay === 99 ? "+99" : limitedDiffDay}</b></span>`;
    }
}

// 스크롤 이벤트 처리 함수
function handleScroll() {
    const triggerHeight = window.innerHeight * 0.6; 
    const ddayElement = document.getElementById("remain-Time");

    if (ddayElement && !isCounting) {
        const elementTop = ddayElement.getBoundingClientRect().top;
        const elementBottom = ddayElement.getBoundingClientRect().bottom; 

        if (elementTop < triggerHeight && elementBottom > 0 && !hasCounted) {
            diffDay();
        }

        if (elementTop > triggerHeight && hasCounted) {
            hasCounted = false; 
        }
    }
}

window.addEventListener("scroll", handleScroll);


