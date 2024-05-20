<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email configuration
    $to = "your.email@example.com";
    $subject = "New message from your resume website";
    $headers = "From: " . $email;

    // Send email
    mail($to, $subject, $message, $headers);

    // Redirect to thank you page
    header("Location: thank_you.html");
    exit();
}
?>
