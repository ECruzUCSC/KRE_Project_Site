function underlineFocus()
{
  console.log("Something");

  $(".guide-button").click(function (event) {
  		$(".guide-button").removeClass("guide-button-focus");
      $(this).addClass("guide-button-focus");
      //console.log($(this).css("text-decoration"))
  });
}
