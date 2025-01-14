function btClick() {
    const nameWatch = document.querySelectorAll('.topName');
    const topDate = document.querySelector('.topDate');
    const watchBt = document.getElementById('topButton');        
    const rightBox = document.querySelector('.rightBox');

    let isOpen = true; // 기본형에서 topNames가 보이는 초기 상태

    // 화면 크기 확인 함수
    const checkScreenSize = () => {
        return window.innerWidth > 768; // 768px 이상은 기본형, 이하 반응형
    };

    // 날짜 업데이트 함수
    const updateDate = () => {
        const today = new Date();
        const hours = ('0' + today.getHours()).slice(-2);
        const minutes = ('0' + today.getMinutes()).slice(-2);
        topDate.textContent = `( Korea, ${hours}:${minutes} )`;
    };

    setInterval(updateDate, 1000); // 매초 날짜 갱신

    // 페이지 로드 시 한번 호출, 새로고침 없이도 바로 표시되도록
    document.addEventListener('DOMContentLoaded', () => {
        updateDate(); // 페이지 로드 후 즉시 날짜 갱신
        if (checkScreenSize()) {
            nameWatch.forEach(item => {
                item.style.display = 'block'; // 기본형 초기 상태
            });
            topDate.style.display = 'none';
            rightBox.style.display = 'none';
            rightBox.style.opacity = '0'; // 기본형에서 rightBox 숨김 유지
            isOpen = false; // 기본형에서 rightBox는 숨겨진 상태 유지
        } else {
            nameWatch.forEach(item => {
                item.style.display = 'none'; // 반응형 초기 상태
            });
            topDate.style.display = 'block';
            rightBox.style.display = 'none';
        }
    });

    // 버튼 클릭 이벤트 핸들러
    watchBt.addEventListener('click', () => {
        isOpen = !isOpen;
        if (checkScreenSize()) { 
            // 기본형: topNames와 topDate 토글
            nameWatch.forEach(item => {
                item.style.display = isOpen ? 'block' : 'none';
            });
            topDate.style.display = isOpen ? 'none' : 'block';
        } else {
            // 반응형: rightBox 토글
            rightBox.style.opacity = isOpen ? '0' : '1';
            setTimeout(() => {
                rightBox.style.display = isOpen ? 'none' : 'block';
            }, 300);
        }
    });

    // 화면 크기 변경 이벤트 핸들러
    window.addEventListener('resize', () => {
        if (checkScreenSize()) { 
            // 기본형으로 전환: topNames 보임, topDate 숨김
            nameWatch.forEach(item => {
                item.style.display = 'block';
            });
            topDate.style.display = 'none';
            rightBox.style.display = 'none';
            rightBox.style.opacity = '0'; // 기본형에서 rightBox 숨김 유지
            isOpen = false; // 기본형에서 rightBox 숨김 상태 유지
        } else {
            // 반응형으로 전환: topNames 숨김, topDate와 rightBox 보임
            nameWatch.forEach(item => {
                item.style.display = 'none';
            });
            topDate.style.display = 'block';
            rightBox.style.opacity = '1';
            rightBox.style.display = 'block';
            isOpen = false; // 상태 초기화
        }
    });
}

// DOM 로드 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    btClick();
});