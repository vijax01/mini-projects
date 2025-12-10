<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=10">
    <title>Welcome | <?php echo $_SESSION['username']; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style1.css">
</head>
<body>
    <header>
        <img src="./assets/logo.png" alt="logo" class="logo-png">
        <i class="fa-solid fa-bars toggle-btn"></i>
        <nav class="navbar">
            <a class="nav-link" href="#" style="--i:0;">Home</a>
            <a class="nav-link" href="#" style="--i:1;">How to Use ?</a>
            <a class="nav-link" href="#" style="--i:2;">Features</a>
            <a class="active-page nav-link" href="#" style="--i:3;">Teacher Dashboard</a>
            <a class='nav-link' href="#" style="--i:4;">Teachers</a>
            <a class='nav-link' href="#" style="--i:5;">Subjects</a>
            <a class='nav-link' href="#" style="--i:6;">Contact Us</a>
            <a id="logoutBtn" href="./partials/logout.php" style="--i:7;">Log out</a>
        </nav>
    </header>
    <script src="script.js"></script>
</body>

</html>