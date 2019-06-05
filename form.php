<!-- Example Here => https://stackoverflow.com/questions/5335273/how-to-send-an-email-using-php       -->
<?php 

    $to = "artist.ms.contact@gmail.com"; // this is your Email address
    $from = "forward@konstantinos-anagnostou.com";
    $email = test_input($_POST['email']); // this is the sender's Email address
    $name = test_input($_POST['name']);
    $subject = "New Email Contact via the Web Form";
    $message = "The user with name: " . $name. "\n\n" . "and email: " . $email . "\n\n" . " wrote the following:" . "\n\n" . test_input($_POST['message']);
    
    // Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers

    $headers .= "From:" . $from;
    
    mail($to,$subject,$message,$headers);
    // "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.

    // security trim & htmlspecialchars
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }     
?>