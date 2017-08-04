function search(input) {
  $.ajax({
    url:
      "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" +
        input +
        "&limit=20&suggest=1&redirects=return&callback=ttt",
    jsonp: "callback",
    dataType: "jsonp",
    success: function(response) {
      var html = "";
      for (var i = 0; i < response[1].length; i++) {
        html +=
          "<a href='" +
          response[3][i] +
          "' target='_blank' class='list-group-item list-group-item-action flex-column align-items-start'><div class='d-flex w-100 justify-content-between'>" +
          "<h5 class='mb-1'>" +
          response[1][i] +
          "</h5></div>" +
          "<p class='mb-1'>" +
          response[2][i] +
          "</p></a><br>";
      }
      $("#test").html(html);
    }
  });
}
$(document).ready(function() {
  document.getElementById("mySearch").onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == "13") {
      // Enter pressed
      console.log(mySearch.value);
      search(mySearch.value);
      $(".center").css({ "margin-top": "1%" });
      return false;
    }
  };

  $("#sbtn").click(function(event) {
    event.preventDefault();
    console.log(mySearch.value);
    search(mySearch.value);
    $(".center").css({ "margin-top": "1%" });
  });
});

/*
function getImage() {
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&gpssearch=${fender}&gpslimit=20",
    dataType: "jsonp",
    success: function(data) {}
  });
}
*/