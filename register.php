
<?php
session_start();
require_once __DIR__ . "\\dp.php";

$message = "";

if (empty($_SESSION["csrf_token"])) {
    $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = trim($_POST["girlName"] ?? "");
    $age = $_POST["girlAge"] ?? "";
    $email = strtolower(trim($_POST["girlEmail"] ?? ""));
    $password = $_POST["girlPassword"] ?? "";
    $confirm = $_POST["girlConfirm"] ?? "";
    $csrf = $_POST["csrf_token"] ?? "";

    if (!hash_equals($_SESSION["csrf_token"], $csrf)) {
        $message = "Invalid request. Please refresh the page.";
    } elseif (
        strlen($name) < 2 ||
        strlen($name) > 30 ||
        !in_array($age, ["8–12", "13–15", "16–18"], true) ||
        !filter_var($email, FILTER_VALIDATE_EMAIL) ||
        strlen($email) > 255
    ) {
        $message = "Please check your registration details.";
    } elseif (strlen($password) < 12 || strlen($password) > 128) {
        $message = "Your password must be at least 12 characters.";
    } elseif ($password !== $confirm) {
        $message = "Your passwords do not match. Try again!";
    } else {
        try {
            $check = $pdo->prepare(
                "SELECT id FROM users WHERE email = ?"
            );
            $check->execute([$email]);

            if ($check->fetch()) {
                $message = "This email address is already registered.";
            } else {
                $hashedPassword = password_hash(
                    $password,
                    PASSWORD_DEFAULT
                );

                $insert = $pdo->prepare(
                    "INSERT INTO users
                    (username, age_group, email, password)
                    VALUES (?, ?, ?, ?)"
                );

                $insert->execute([
                    $name,
                    $age,
                    $email,
                    $hashedPassword
                ]);

                $_SESSION["csrf_token"] = bin2hex(random_bytes(32));

                header("Location: login.php?registered=1");
                exit;
            }

        } catch (PDOException $e) {
            error_log($e->getMessage());
            $message = "Something went wrong. Please try again.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>GirlCode Future | Join Us</title>

    <link rel="stylesheet" href="/css/style.css">
</head>

<body>

<?php include __DIR__ . "/components/header.php"; ?>

<section id="register" class="pale">

    <h2>💜 Join GirlCode Future</h2>

    <p class="intro">
        Start your technology journey! Create your account below.
    </p>

    <div class="lesson-area">

        <form id="registerForm" method="POST" action="register.php">

            <h3>🌸 Create Your Account</h3>

            <input
                type="hidden"
                name="csrf_token"
                value="<?= htmlspecialchars($_SESSION["csrf_token"]) ?>"
            >

            <label for="girlName">First name or nickname</label>

            <input
                id="girlName"
                name="girlName"
                type="text"
                maxlength="30"
                placeholder="What should we call you?"
                required
                value="<?= htmlspecialchars($_POST["girlName"] ?? "") ?>"
            >

            <label for="girlAge">Choose your age group</label>

            <select id="girlAge" name="girlAge" required>

                <option value="">Select your age group</option>

                <option value="8–12"
                    <?= (($_POST["girlAge"] ?? "") === "8–12") ? "selected" : "" ?>>
                    8–12 years
                </option>

                <option value="13–15"
                    <?= (($_POST["girlAge"] ?? "") === "13–15") ? "selected" : "" ?>>
                    13–15 years
                </option>

                <option value="16–18"
                    <?= (($_POST["girlAge"] ?? "") === "16–18") ? "selected" : "" ?>>
                    16–18 years
                </option>

            </select>

            <label for="girlEmail">Email address</label>

            <input
                id="girlEmail"
                name="girlEmail"
                type="email"
                maxlength="255"
                placeholder="Email address"
                required
                value="<?= htmlspecialchars($_POST["girlEmail"] ?? "") ?>"
            >

            <label for="girlPassword">Create a password</label>

            <input
                id="girlPassword"
                name="girlPassword"
                type="password"
                minlength="12"
                maxlength="128"
                placeholder="At least 12 characters"
                required
            >

            <label for="girlConfirm">Confirm password</label>

            <input
                id="girlConfirm"
                name="girlConfirm"
                type="password"
                minlength="12"
                maxlength="128"
                placeholder="Enter password again"
                required
            >

            <button class="button" type="submit">
                Create My Profile ✨
            </button>

            <p id="registerMessage" class="result" aria-live="polite">
                <?= htmlspecialchars($message) ?>
            </p>

        </form>

        <p class="small">
            Your password is securely hashed before being stored.
            Please only provide information that is necessary for your account.
        </p>

    </div>

</section>

<style>
#register .lesson-area {
    max-width: 520px;
}

#register label {
    display: block;
    margin: 13px 0 5px;
    font-weight: bold;
    color: #35205e;
}

#register input,
#register select {
    width: 100%;
    padding: 13px;
    border: 1px solid #d9c8ee;
    border-radius: 10px;
    font-size: 1rem;
    background: white;
}

#register form .button {
    margin-top: 20px;
}

#register .small {
    margin-top: 22px;
    color: #765f8e;
}
</style>

<?php include __DIR__ . "/components/footer.php"; ?>

<script src="script.js"></script>

</body>
</html>
