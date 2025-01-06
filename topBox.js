function btClick(){
    const nameWatch = document.querySelectorAll('.topName');
    const watchBt = document.getElementById('topButton');

    let isOpen = true;
    watchBt.addEventListener('click', ()=>{
        isOpen = !isOpen
        // 모든 topName 요소의 display 속성 설정
        nameWatch.forEach((item) => {
            item.style.display = isOpen ? 'block' : 'none';
        });
    });
}

btClick(); // 함수 호출