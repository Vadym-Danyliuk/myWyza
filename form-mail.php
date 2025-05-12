<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Очищення і перевірка даних
    $name = strip_tags(trim($_POST["name1"]));
    $email = filter_var(trim($_POST["email1"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone1"]));
    $ooselect = strip_tags(trim($_POST["ooselect"]));
    $comment = strip_tags(trim($_POST["comment"])); // Отримання коментаря

    // Перевірка на обов'язкові поля
    if (empty($name1) || !filter_var($email1, FILTER_VALIDATE_EMAIL) || empty($phone1)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Будь ласка, заповніть усі обов'язкові поля."]);
        exit;
    }

    // Формування листа
    $recipient = "mywiza.com.ua@gmail.com";
    $email_subject = "Нове повідомлення: $ooselect";
    $email_content = "Ім'я: $name\n";
    $email_content .= "Електронна адреса: $email\n";
    $email_content .= "Номер телефону: $phone\n";
    $email_content .= "Обраний тип візи: $ooselect\n";
    $email_content .= "Коментар: $comment\n";

    $email_headers = "From: $name <$email>\r\n";
    $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Відправка листа
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Дякуємо! Ваше повідомлення надіслано."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "На жаль, сталася помилка, і ми не змогли надіслати ваше повідомлення."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Помилка: некоректний запит."]);
}
?>
