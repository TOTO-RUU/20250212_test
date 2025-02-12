$(function () {
  $.ajax({
    url: "json/weekly.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          var title = data[i].title;
          var txt = data[i].txt;
          var price = data[i].price;
          var url = data[i].url;

          $(".weekly_box")
            .eq(i)
            .append(
              '<a href="#">' + "<img src='" + data[i].url + "'/>" + "</a>"
            );
          $(".weekly_box")
            .eq(i)
            .append('<p><a href="#">' + data[i].title + "</a></p>");
          $(".weekly_box")
            .eq(i)
            .append('<span><a href="#">' + data[i].price + "</a></span>");

          $(".weekly_box > div").attr({
            width: "380",
            height: "480",
            margin: "10",
          });
          $(".weekly_box > div > a > img").attr({
            width: "380",
            height: "480",
            overflow: "hidden",
            transition: "0.24s",
            "border-radius": "20px",
          });

          $(".weekly_box > div > a > img").hover(
            function () {
              $(this)
                .attr({ width: "380", height: "360" })
                .css({
                  opacity: "0.9",
                  transform: "scale(1.04)",
                  display: "inline",
                });
            },
            function () {
              $(this)
                .attr({ width: "380", height: "480" })
                .css({
                  opacity: "1",
                  transform: "scale(1)",
                  display: "inline",
                });
            }
          );

          $(".weekly_box > a").css({ "line-height": "12px" });
          $(".weekly_box > p").css({ "line-height": "26px" });
          $(".weekly_box > span").css({ "line-height": "28px" });
        }
      }
    },
  });
});
