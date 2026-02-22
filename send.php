<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'rupesh.kumar.light@gmail.com';
    $mail->Password = 'xvtu wpuv hxxi pkbx';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('rupesh.kumar.light@gmail.com');

    $mail->Subject = 'New Website Enquiry';
    $mail->Body =
        "Name: ".$_POST['name']."\n".
        "Email: ".$_POST['email']."\n".
        "Phone: ".$_POST['phone']."\n".
        "Service: ".$_POST['service']."\n".
        "Message: ".$_POST['message'];

    $mail->send();
    echo "success";
} catch (Exception $e) {
    echo "error";
}
?>