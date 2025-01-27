<?php
// Database connection
$host = 'localhost';
$dbname = 'myportfolio_website_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $message = $_POST['message'] ?? '';

        if (!empty($name) && !empty($email) && !empty($message)) {
            $stmt = $pdo->prepare("INSERT INTO contacts (name, email, message) VALUES (:name, :email, :message)");
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':message', $message);
            $stmt->execute();

            echo 'Message successfully sent!';
        } else {
            echo 'Please fill out all fields.';
        }
    }
} catch (PDOException $e) {
    echo 'Database connection failed: ' . $e->getMessage();
}
?>
