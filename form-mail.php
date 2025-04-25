<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Очищення і перевірка даних
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $purpose = strip_tags(trim($_POST["purpose"]));
    $contry = strip_tags(trim($_POST["contry"]));
    $marital_status = strip_tags(trim($_POST["marital_status"]));
    $age = intval($_POST["age"]);
    $current_country = strip_tags(trim($_POST["current_country"]));
    $friends = strip_tags(trim($_POST["friends"]));
    $occupation = strip_tags(trim($_POST["occupation"]));
    $visa_denials = strip_tags(trim($_POST["visa_denials"]));
    $countries_visited = strip_tags(trim($_POST["countries_visited"]));
    $featback = strip_tags(trim($_POST["featback"]));
    $comment= strip_tags(trim($_POST["comment"]));

    // Перевірка на обов'язкові поля
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($phone)) {
        http_response_code(400);
        echo "Будь ласка, заповніть усі обов'язкові поля.";
        exit;
    }

    // Формування листа
    $recipient = "mywiza.com.ua@gmail.com";
    $subject = "Заявка від $name";
    $email_content = "Ім'я: $name\n";
    $email_content .= "Електронна адреса: $email\n";
    $email_content .= "Номер телефону: $phone\n";
    $email_content .= "Мета поїздки: $purpose\n";
    $email_content .= "Країна: $contry\n";
    $email_content .= "Сімейний стан: $marital_status\n";
    $email_content .= "Вік: $age\n";
    $email_content .= "Країна перебування і час: $current_country\n";
    $email_content .= "Друзі в обраній країні: $friends\n";
    $email_content .= "Сфера діяльності: $occupation\n";
    $email_content .= "Відмови по візах: $visa_denials\n";
    $email_content .= "Країни, в яких були за останні 5 років:\n$countries_visited\n";
    $email_content .= "Звідки ви про нас дізнались:$featback\n";
    $email_content .= "Є ще важлива інформація, опишіть:\n$comment\n";
    $email_headers = "From: $name <$email>";

    // Відправка листа
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Дякуємо! Ваша заявка надіслана.";
    } else {
        http_response_code(500);
        echo "На жаль, сталася помилка, і ми не змогли надіслати вашу заявку.";
    }
} else {
    http_response_code(403);
    echo "Помилка: некоректний запит.";
}

?>