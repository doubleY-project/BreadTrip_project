document.addEventListener("scroll", () => {
    const arrowImg = document.querySelector(".arrowImg");
    const inviteMent = document.querySelector(".inviteMent");
  
    const secondBottomScreen = document.querySelector(".secondBottomScreen");
    const rect = secondBottomScreen.getBoundingClientRect();
  
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // 화살표 애니메이션 (FadeInTopRight)
      arrowImg.style.transition = "transform 0.7s ease, opacity 0.7s ease";
      arrowImg.style.transform = "translateY(0)";
      arrowImg.style.opacity = "1";
  
      // inviteMent 애니메이션 (왼쪽에서 나타나기)
      inviteMent.style.transition = "transform 0.7s ease, opacity 0.7s ease";
      inviteMent.style.transform = "translateX(0)";
      inviteMent.style.opacity = "1";
    } else {
      // 스크롤을 다시 위로 올리면 초기화
      arrowImg.style.transform = "translateY(-50px)";
      arrowImg.style.opacity = "0";
  
      inviteMent.style.transform = "translateX(-50px)";
      inviteMent.style.opacity = "0";
    }
  });
  