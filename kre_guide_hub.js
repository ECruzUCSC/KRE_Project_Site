function underlineFocus()
{

  $(".guide-button").click(function (event) {
  		$(".guide-button").removeClass("guide-button-focus");
      $(this).addClass("guide-button-focus");
      //console.log($(this).css("text-decoration"))


      $("#beginner-guides").css("display", "none");
      $("#hero-guides").css("display", "none");
      $("#misc-guides").css("display", "none");
      if($(this).text() === "Beginner") {
        $("#beginner-guides").css("display", "block");
      }
      if($(this).text() === "Hero") {
        $("#hero-guides").css("display", "block");
      }
      if($(this).text() === "Misc.") {
        $("#misc-guides").css("display", "block");
      }
  });
}
