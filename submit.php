<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = trim($_POST['name']);
    $tel = trim($_POST['tel']);

    // Проверка на заполненность полей
    if (empty($name) || empty($tel)) {
        echo "Пожалуйста, заполните все поля.";
        exit;
    }

    // Задаем адрес получателя и тему письма
    $to = "vbloger23@gmail.com";
    $subject = "Новая заявка с сайта";

    // Формируем сообщение
    $message = "Имя: $name\n";
    $message .= "Телефон: $tel\n";

    // Задаем заголовки
    $headers = "From: no-reply@yourdomain.com\r\n"; // Замените на ваш адрес

    // Отправляем письмо
    if (mail($to, $subject, $message, $headers)) {
        echo "Ваше сообщение отправлено!";
    } else {
        echo "Ошибка отправки сообщения. Пожалуйста, попробуйте позже.";
    }
} else {
    echo "Некорректный запрос.";
}
?>