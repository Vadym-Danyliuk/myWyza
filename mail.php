<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Очищення і перевірка даних
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $subject = strip_tags(trim($_POST["subject"]));
    $description = strip_tags(trim($_POST["description"]));

    // Перевірка на обов'язкові поля
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($phone) || empty($subject) || empty($description)) {
        http_response_code(400);
        echo "Будь ласка, заповніть усі обов'язкові поля.";
        exit;
    }

    // Формування листа
    $recipient = "mywiza.com.ua@gmail.com";
    $email_subject = "Нове повідомлення: $subject";
    $email_content = "Ім'я: $name\n";
    $email_content .= "Електронна адреса: $email\n";
    $email_content .= "Номер телефону: $phone\n";
    $email_content .= "Тема: $subject\n";
    $email_content .= "Короткий опис:\n$description\n";

    $email_headers = "From: $name <$email>";

    // Відправка листа
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Дякуємо! Ваше повідомлення надіслано.";
    } else {
        http_response_code(500);
        echo "На жаль, сталася помилка, і ми не змогли надіслати ваше повідомлення.";
    }
} else {
    http_response_code(403);
    echo "Помилка: некоректний запит.";
}

?>
