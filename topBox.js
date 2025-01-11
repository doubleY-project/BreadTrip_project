 function btClick() {
        const nameWatch = document.querySelectorAll('.topName');
        const topDate = document.querySelector('.topDate');
        const watchBt = document.getElementById('topButton');
        
        let isOpen = true;
        let isToggled = false;

       // 날짜 업데이트 함수
        const updateDate = () => {
            const today = new Date();
            const hours = ('0' + today.getHours()).slice(-2);
            const minutes = ('0' + today.getMinutes()).slice(-2);
            const topDate = document.querySelector('.topDate');
            
            if (topDate) {
                topDate.textContent = `( Korea, ${hours}:${minutes} )`;
            }
        };

        // 날짜를 자동으로 1분마다 갱신
        setInterval(updateDate, 60000); // 60000ms = 1분

        // 페이지 로드 시 한번 호출, 새로고침 없이도 바로 표시되도록
        document.addEventListener('DOMContentLoaded', () => {
            updateDate(); // 페이지 로드 후 즉시 날짜 갱신
        });

        // 버튼 클릭 이벤트 핸들러
        watchBt.addEventListener('click', () => {
            isOpen = !isOpen;
            
            // .topName 요소 숨기기/보이기
            nameWatch.forEach(item => {
                item.style.display = isOpen ? 'block' : 'none';
            });

            if (!isOpen) {
                updateDate();
                topDate.style.display = 'block';

            } else {
                topDate.style.display = 'none';
            }
        });

        // 초기화
        updateDate();
        topDate.style.display = 'none';
    }

    // 초기화 함수 실행
    btClick();