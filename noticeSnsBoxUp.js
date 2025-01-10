document.addEventListener("scroll", () => {
    const noticeBox = document.querySelector(".notice");
    const sns_Box = document.querySelector(".snsBox");
    const fifthScreen = document.querySelector(".fifthScreen");
    const rect = fifthScreen.getBoundingClientRect();
    
    if (rect.top <= window.innerHeight && rect.bottom > 0) {
        noticeBox.style.transition = "transform 0.7s ease, opacity 0.7s ease";
        noticeBox.style.transform = "translateY(0)"; // 아래에서 위로 올라옴
        noticeBox.style.opacity = "1"; // 투명도 1로 변경
    
        sns_Box.style.transition = "transform 0.7s ease, opacity 0.7s ease";
        sns_Box.style.transform = "translateY(0)"; // 아래에서 위로 올라옴
        sns_Box.style.opacity = "1"; // 투명도 1로 변경
    } else {
      // 스크롤을 다시 위로 올리면 초기화 (애니메이션 리셋)
      noticeBox.style.transform = "translateY(50px)"; // 아래로 위치 이동
      noticeBox.style.opacity = "0"; // 투명하게 설정
      
      sns_Box.style.transform = "translateY(50px)"; // 아래로 위치 이동
      sns_Box.style.opacity = "0"; // 투명하게 설정
    }
  });
  