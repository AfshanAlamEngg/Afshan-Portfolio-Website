<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  // Send email (this is a basic example, you might want to use PHPMailer or a similar library for more robust functionality)
  $to = "your-email@example.com";
  $subject = "New message from $name";
  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  $mailBody = "Name: $name\n";
  $mailBody .= "Email: $email\n";
  $mailBody .= "Message:\n$message";

  if (mail($to, $subject, $mailBody, $headers)) {
    echo "Thank you for your message, $name. I will get back to you shortly.";
  } else {
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
} else {
  echo "Invalid request method.";
}
?>
