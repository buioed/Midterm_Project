$(document).ready(function () {
  // 0 = 포스터 화면, 1 = 정원 화면
  let screen_status = 0;

  // 구두 또는 "다시 비 내리기"를 클릭하면 실행
  $(".shoes, .back").on("click", function () {
    if (screen_status == 0) {
      $(".stage").addClass("open");
      screen_status = 1;
    } else {
      $(".stage").removeClass("open"); //addClass의 반대
      $(".stage").removeClass("rainbow-on"); //무지개도 지움
      screen_status = 0;
    }
  });

  // 포스터 위에서 마우스를 움직이면 빛이 따라옴
  $(".poster-screen").on("mousemove", function (e) {
    $(".cursor-light").css("left", e.pageX - 100);
    $(".cursor-light").css("top", e.pageY - 100);
  });

  // 햇빛을 클릭하면 무지개가 생김
  $(".sun").on("click", function () {
    $(".stage").addClass("rainbow-on");
  });
});
