function guide_inject(file) {

  fullDirectory = "./guides/pansirone_basics/guide_html_inject";

  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", fullDirectory, false);
  rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              var allText = rawFile.responseText;
              $("#guide-area").html(allText);
          }
      }
  }
}
