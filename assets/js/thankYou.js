jQuery(document).ready(function ($) {
  $("#submitButton2").click(function (event) {
    event.preventDefault();

    var name = $("#name1").val().trim();
    var email = $("#email1").val().trim();
    var phone = $("#phone1").val().trim();
    var ooselect = $(".wpcf7-select").val().trim();
    var comment = $("textarea[name='comment']").val().trim();

    if (name === "" || email === "" || phone === "" || ooselect === "") {
      $(".form-messege2")
        .text("Будь ласка, заповніть всі поля перед надсиланням!")
        .css("color", "red");
      return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      $(".form-messege2")
        .text("Введіть коректну електронну пошту!")
        .css("color", "red");
      return;
    }

    var currentPage = window.location.pathname;
    var thankYouUrl = `thank_you.html?page=${encodeURIComponent(currentPage)}`;

    var newTab = window.open(thankYouUrl, "_blank");

    $.ajax({
      type: "POST",
      url: "form-mail.php",
      data: $("#contact-form1").serialize(),
      success: function (response) {
        try {
          var result =
            typeof response === "string" ? JSON.parse(response) : response;

          $(".form-messege2")
            .text(result.message)
            .css("color", result.status === "success" ? "green" : "red");

          if (result.status === "success") {
            setTimeout(function () {
              newTab.close();
            }, 3000);
          }
        } catch (e) {
          $(".form-messege2")
            .text("Помилка обробки відповіді!")
            .css("color", "red");
        }
      },
      error: function () {
        $(".form-messege2")
          .text("Помилка сервера! Спробуйте пізніше.")
          .css("color", "red");
      },
    });
  });
});
