document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submitButton")
    .addEventListener("click", function () {
      // Масив із ID полів, які потрібно перевірити
      const requiredFields = ["name"];
      let allFilled = true;

      requiredFields.forEach((field) => {
        const input = document.getElementById(field);
        if (!input || input.value.trim() === "") {
          allFilled = false;
        }
      });

      if (allFilled) {
        // Відкриваємо нову сторінку
        let newTab = window.open("thank_you.html", "_blank");

        // Закриваємо її через 5 секунд
        setTimeout(() => {
          newTab.close();
        }, 5000);
      } else {
        alert("Будь ласка, заповніть усі обов'язкові поля!");
      }
    });
});
