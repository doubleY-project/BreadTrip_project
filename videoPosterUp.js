document.addEventListener("scroll", () => {
    const bakingPosterVideo = document.querySelector(".videoPoster video");
    const posterImg = document.querySelector(".videoPoster img");
    const thirdScreen = document.querySelector(".thirdScreen");
    const rect = thirdScreen.getBoundingClientRect();
    
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // 화살표 애니메이션 (FadeInBottomUp)
      posterImg.style.transition = "transform 0.7s ease, opacity 0.7s ease";
      posterImg.style.transform = "translateY(0)"; // 아래에서 위로 올라옴
      posterImg.style.opacity = "1"; // 투명도 1로 변경
    
      // inviteMent 애니메이션 (FadeInBottomUp)
      bakingPosterVideo.style.transition = "transform 0.7s ease, opacity 0.7s ease";
      bakingPosterVideo.style.transform = "translateY(0)"; // 아래에서 위로 올라옴
      bakingPosterVideo.style.opacity = "1"; // 투명도 1로 변경
    } else {
      // 스크롤을 다시 위로 올리면 초기화 (애니메이션 리셋)
      posterImg.style.transform = "translateY(50px)"; // 아래로 위치 이동
      posterImg.style.opacity = "0"; // 투명하게 설정
      
      bakingPosterVideo.style.transform = "translateY(50px)"; // 아래로 위치 이동
      bakingPosterVideo.style.opacity = "0"; // 투명하게 설정
    }
  });
  