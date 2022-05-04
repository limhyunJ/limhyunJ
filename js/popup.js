$(document).ready(function () {
  $(function () {
    var $open_popmsg = $(".modalWrap"),
      $close_btn = $(".inputBox-close i"),
      checkBoxElem = document.getElementById("check"),
      popUpName = "sunny";

    if (getCookies(popUpName) == "done") {
      $open_popmsg.hide();
    }

    $close_btn.click(function (e) {
      if (checkBoxElem.checked == true) {
        var expdate = new Date(),
          remainHours = 23 - expdate.getHours(),
          remainMin = 60 - expdate.getMinutes();

        expdate.setTime(
          expdate.getTime() +
            remainHours * 60 * 60 * 1000 +
            remainMin * 60 * 1000
        );

        setCookies(popUpName, "done", expdate);
      }

      $open_popmsg.hide();
      e.preventDefault();
    });
  });

  /* Cookie Set */
  function setCookies(name, value, expires) {
    document.cookie =
      name + "=" + escape(value) + "; path=/; expires=" + expires.toGMTString();
  }

  /* Cookie Load */
  function getCookies(name) {
    var search = name + "=";
    offset = document.cookie.indexOf(search);

    if (document.cookie.length > 0) {
      // 쿠키가 설정되어 있다면
      if (offset != -1) {
        // 쿠키가 존재하면
        offset += search.length;
        // set index of beginning of value
        end = document.cookie.indexOf(";", offset);
        // 쿠키 값의 마지막 위치 인덱스 번호 설정
        if (end == -1) end = document.cookie.length;

        return unescape(document.cookie.substring(offset, end));
      }
    }
  }
});
