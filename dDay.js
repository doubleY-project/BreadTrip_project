const dday = new Date("September 28, 2024").setHours(0, 0, 0, 0); // D-day 설정

let previousDiffDay = null; // 이전 계산값을 저장해 애니메이션 반복 방지

function countingType2(finalValue) {
    const element = document.querySelector('#number2') || document.querySelector('#remain-Time');

    // 숫자를 각 자리로 나눠서 올리기 위한 배열
    let current = new Array(String(finalValue).length).fill(0); // 초기값 0으로 채움
    let arrayNum = String(finalValue).split('').reverse(); // 숫자를 배열로 분리 후 뒤집기

    // 각 자리 숫자 변경 속도 설정 (최대 0.06초씩)
    const total = arrayNum.reduce((pre, cur) => Number(pre) + Number(cur), 0);
    const eachTime = Math.min(1000 / total, 60); // 최대 속도 조정

    let time = 0;
    for (let j = 0; j < arrayNum.length; j++) {
        for (let i = 0; i <= arrayNum[j]; i++) {
            setTimeout(() => {
                current[arrayNum.length - j - 1] = i; // 자리별 숫자 변경
                element.innerHTML = current.join(''); // HTML 업데이트
            }, eachTime * (time + i));
        }
        time += Number(arrayNum[j]) - 1;
    }

    // 마지막 값으로 고정
    setTimeout(() => {
        element.innerHTML = String(finalValue);
    }, eachTime * time + 100); // 애니메이션 끝난 뒤 실행
}

function diffDay() {
    const todayDate = new Date().setHours(0, 0, 0, 0); // 현재 시간 가져오기
    const gap = dday - todayDate; // D-day까지 남은 시간 계산
    const diffDay = Math.ceil(gap / (1000 * 60 * 60 * 24)); // 남은 일수 계산
    const element = document.getElementById("remain-Time");

    if (diffDay === previousDiffDay) {
        // 이전 값과 같으면 애니메이션 실행하지 않음
        return;
    }

    previousDiffDay = diffDay; // 이전 값 업데이트

    if (gap > 0) {
        // D - 표시 후 숫자 애니메이션 적용
        element.innerHTML = `D - <span id="number2"></span>`;
        countingType2(diffDay);
    } else if (gap === 0) {
        // D-Day 표시
        element.innerHTML = "D-Day";
    } else {
        // D + 표시 후 숫자 애니메이션 적용
        const limitedDiffDay = Math.max(diffDay, 99);
        element.innerHTML = `D + <span id="number2"></span>`;
        countingType2(Math.abs(limitedDiffDay));
    }
}

// 초기 실행
diffDay();

// 주기적으로 업데이트 (1초마다 실행)
setInterval(diffDay, 1000);
