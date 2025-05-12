jQuery(document).ready(function ($) {
  $("#submitButton").click(function (event) {
    event.preventDefault(); // Запобігаємо стандартному надсиланню форми

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();

    // Перевірка заповнення всіх полів
    if (name === "" || email === "" || phone === "") {
      $(".form-messege")
        .text("Будь ласка, заповніть всі поля перед надсиланням!")
        .css("color", "red");
      return;
    }

    // Перевірка коректності email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      $(".form-messege")
        .text("Введіть коректну електронну пошту!")
        .css("color", "red");
      return;
    }

    // Отримання URL сторінки
    var currentPage = window.location.pathname;
    var thankYouUrl = `thank_you.html?page=${encodeURIComponent(currentPage)}`;

    // Відкриття сторінки у новій вкладці
    var newTab = window.open(thankYouUrl, "_blank");

    // Відправка форми через AJAX для отримання відповіді
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $("#contact-form").serialize(),
      success: function (response) {
        try {
          // Обробка відповіді як JSON
          var result =
            typeof response === "string" ? JSON.parse(response) : response;

          // Вивід реального тексту повідомлення
          $(".form-messege")
            .text(result.message)
            .css("color", result.status === "success" ? "green" : "red");

          if (result.status === "success") {
            // Закриття нової вкладки через певний інтервал (3 сек)
            setTimeout(function () {
              newTab.close();
            }, 3000);
          }
        } catch (e) {
          $(".form-messege")
            .text("Помилка обробки відповіді!")
            .css("color", "red");
        }
      },
      error: function () {
        $(".form-messege")
          .text("Помилка сервера! Спробуйте пізніше.")
          .css("color", "red");
      },
    });
  });
});
