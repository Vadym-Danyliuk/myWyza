jQuery(document).ready(function ($) {
  $("#submitButton2").click(function (event) {
    event.preventDefault(); // Запобігаємо стандартному надсиланню

    var name = $("#name1").val().trim();
    var email = $("#email1").val().trim();
    var phone = $("#phone1").val().trim();

    // Перевірка заповнення всіх полів
    if (name === "" || email === "" || phone === "") {
      $(".form-messege2")
        .text("Будь ласка, заповніть всі поля перед надсиланням!")
        .css("color", "red");
      return;
    }

    // Перевірка коректності email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      $(".form-messege2")
        .text("Введіть коректну електронну пошту!")
        .css("color", "red");
      return;
    }

    // Отримання URL сторінки
    var currentPage = window.location.pathname;
    var thankYouUrl = `thank_you.html?page=${encodeURIComponent(currentPage)}`;

    var newTab = window.open(thankYouUrl, "_blank");

    setTimeout(function () {
      newTab.close();
    }, 1000);

    // Повідомлення про успішне надсилання
    $(".form-messege2")
      .text("Дякуємо! Ваша заявка надіслана.")
      .css("color", "green");
  });
});
