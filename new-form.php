<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Основна інформація
    $full_name = strip_tags(trim($_POST["full_name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $birthplace = strip_tags(trim($_POST["birthplace"]));
    $education_level = strip_tags(trim($_POST["education_level"]));
    $marital_status = strip_tags(trim($_POST["marital_status"]));

    // Інформація про чоловіка/дружину
    $spouse_name = strip_tags(trim($_POST["spouse_name"]));
    $spouse_dob = strip_tags(trim($_POST["spouse_dob"]));
    $spouse_birthplace = strip_tags(trim($_POST["spouse_birthplace"]));

    // Інформація про дітей
    $has_children = strip_tags(trim($_POST["has_children"]));
    $child1_name = strip_tags(trim($_POST["child1_name"]));
    $child1_dob = strip_tags(trim($_POST["child1_dob"]));
    $child1_status = strip_tags(trim($_POST["child1_status"]));
    $child1_birthplace = strip_tags(trim($_POST["child1_birthplace"]));

    $child2_name = strip_tags(trim($_POST["child2_name"]));
    $child2_dob = strip_tags(trim($_POST["child2_dob"]));
    $child2_status = strip_tags(trim($_POST["child2_status"]));
    $child2_birthplace = strip_tags(trim($_POST["child2_birthplace"]));
    $comment = strip_tags(trim($_POST["comment"]));

    // Перевірка основних полів
    if (empty($full_name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($phone) || empty($birthplace)) {
        http_response_code(400);
        echo "Будь ласка, заповніть усі обов'язкові поля.";
        exit;
    }

    // Формування листа
    $recipient = "mywiza.com.ua@gmail.com";
    $subject = "Заявка від $full_name";
    $email_content = "Основна інформація:\n";
    $email_content .= "Прізвище та ім'я: $full_name\n";
    $email_content .= "Електронна адреса: $email\n";
    $email_content .= "Номер телефону: $phone\n";
    $email_content .= "Місце народження: $birthplace\n";
    $email_content .= "Ступінь освіти: $education_level\n";
    $email_content .= "Сімейний стан: $marital_status\n\n";

    $email_content .= "Інформація про чоловіка/дружину:\n";
    if (!empty($spouse_name)) {
        $email_content .= "Прізвище та ім'я: $spouse_name\n";
        $email_content .= "Дата народження: $spouse_dob\n";
        $email_content .= "Місце народження: $spouse_birthplace\n\n";
    }

    $email_content .= "Інформація про дітей до 21 року:\n";
    $email_content .= "Чи є діти: $has_children\n";
    if ($has_children == "так") {
        if (!empty($child1_name)) {
            $email_content .= "Дитина 1 - Прізвище та ім'я: $child1_name, Дата народження: $child1_dob, Сімейний стан: $child1_status, Місто народження: $child1_birthplace\n";
        }
        if (!empty($child2_name)) {
            $email_content .= "Дитина 2 - Прізвище та ім'я: $child2_name, Дата народження: $child2_dob, Сімейний стан: $child2_status, Місто народження: $child2_birthplace\n";
        }
    }
    $email_content .= "Є ще важлива інформація, опишіть: $comment\n\n";
    
    $email_headers = "From: $full_name <$email>";

    // Відправка листа
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Вдало відправлено листа
        http_response_code(200);
        echo "Дякуємо! Ваша заявка надіслана.";
        
        // Інтеграція Data Layer
        echo "
        <script>
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'formSubmission',
                'formId': 'contactForm',
                'userEmail': '" . htmlspecialchars($email) . "'
            });
        </script>
        ";
    } else {
        http_response_code(500);
        echo "На жаль, сталася помилка, і ми не змогли надіслати вашу заявку.";
    }
} else {
    http_response_code(403);
    echo "Помилка: некоректний запит.";
}

?>
