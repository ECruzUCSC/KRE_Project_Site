function underlineFocus()
{

  $(".guide-button").click(function (event) {

      if($(this).text() === "KR Index") {
        return;
      }

  		$(".guide-button").removeClass("guide-button-focus");
      $(this).addClass("guide-button-focus");
      //console.log($(this).css("text-decoration"))



      $("#hero-info").css("display", "none");
      $("#skill-info").css("display", "none");
      $("#guide").css("display", "none");
      if($(this).text() === "Hero Info") {
        $("#hero-info").css("display", "block");
      }
      if($(this).text() === "Skill Info") {
        $("#skill-info").css("display", "block");
      }
      if($(this).text() === "Guide") {
        $("#guide").css("display", "block");
      }
  });
}
