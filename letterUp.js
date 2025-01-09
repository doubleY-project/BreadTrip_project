// 대상 요소들을 선택 (secondScreen과 thirdScreen의 hidden 클래스)
const elementsToShow = document.querySelectorAll(".secondScreen .hidden");

// Intersection Observer 생성
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 뷰포트에 들어오면 `show` 클래스를 추가
      entry.target.classList.add("show");
    } else {
      // 뷰포트를 벗어나면 `show` 클래스를 제거 (애니메이션 반복 가능)
      entry.target.classList.remove("show");
    }
  });
});

// 각 요소를 관찰
elementsToShow.forEach((element) => observer.observe(element));
