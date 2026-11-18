
<?php
session_start();
require_once __DIR__ . "\\dp.php";

$message = "";

// Check whether the user has submitted the form
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $email = strtolower(trim($_POST["email"] ?? ""));
    $password = $_POST["password"] ?? "";
    $csrf = $_POST["csrf_token"] ?? "";

    if (
        !isset($_SESSION["csrf_token"]) ||
        !hash_equals($_SESSION["csrf_token"], $csrf)
    ) {
        $message = "Invalid request. Please refresh the page.";

    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = "Please enter a valid email address.";

    } else {

        try {
            // Find the registered user
            $stmt = $pdo->prepare(
                "SELECT * FROM users WHERE email = ?"
            );

            $stmt->execute([$email]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            // Verify the password
            if (
                $user &&
                password_verify($password, $user["password"])
            ) {

                // Create a new secure session ID
                session_regenerate_id(true);

                $_SESSION["user_id"] = $user["id"];
                $_SESSION["username"] = $user["username"];

                // Redirect to dashboard
                header("Location: dashboard.php");
                exit;

            } else {
                $message = "Email or password is incorrect. Please try again!";
            }

        } catch (PDOException $e) {
            error_log($e->getMessage());
            $message = "Something went wrong. Please try again.";
        }
    }
}

// Create CSRF token for the form
if (empty($_SESSION["csrf_token"])) {
    $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>GirlCode Future | Login</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

<div id="header-placeholder"></div>

<section id="login" class="pale">

    <h2>💜 Welcome Back!</h2>

    <p class="intro">
        Ready to continue your technology journey?
        Log in to GirlCode Future.
    </p>

    <div class="lesson-area">

        <form method="POST" action="login.php">

            <h3>🌸 Login to Your Account</h3>

            <input
                type="hidden"
                name="csrf_token"
                value="<?= htmlspecialchars($_SESSION["csrf_token"]) ?>"
            >

            <label for="email">Email Address</label>

            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                autocomplete="username"
            >

            <label for="password">Password</label>

            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                autocomplete="current-password"
            >

            <button class="button" type="submit">
                Login ✨
            </button>

            <p class="result" aria-live="polite">
                <?= htmlspecialchars($message) ?>
            </p>

            <?php if (isset($_GET["registered"])): ?>
                <p class="result">
                    🎉 Your account has been created!
                    You can now log in.
                </p>
            <?php endif; ?>

            <p class="small">
                Don't have an account?
                <a href="register.php">Join GirlCode Future</a>
            </p>

        </form>

    </div>

</section>

<style>
#login .lesson-area {
    max-width: 520px;
}

#login label {
    display: block;
    margin: 13px 0 5px;
    font-weight: bold;
    color: #35205e;
}

#login input {
    width: 100%;
    padding: 13px;
    border: 1px solid #d9c8ee;
    border-radius: 10px;
    font-size: 1rem;
    background: white;
}

#login form .button {
    margin-top: 20px;
}

#login .small {
    margin-top: 20px;
    color: #765f8e;
}

#login .small a {
    color: #713bd1;
    font-weight: bold;
}
</style>

<div id="footer-placeholder"></div>

<script src="link.js"></script>
<script src="script.js"></script>

</body>
</html>
