<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Print form data for debugging
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Message: $message<br>";

    // Email configurations
    $to = 'alina1818sport@gmail.com'; // Replace with your email
    $subject = 'New Contact Form Submission';
    $headers = "From: " . $email;

    // The message
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Redirect to thank you page
        header('Location: thank_you.html');
        exit;
    } else {
        echo 'Error sending email.';
    }
} else {
    // If the form is not submitted via POST, redirect back to the contact page
    header('Location: contact.html');
    exit;
}
?>
