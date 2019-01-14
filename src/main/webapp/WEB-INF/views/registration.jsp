<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Registration</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="../css/registration.css" />
</head>
<body>
    <div class="container">
        <div>Регистрация</div>
        <form name="registrationForm" method="post" action="../index.html">
            <input type="text" name="name" placeholder="Имя" required>
            <input type="text" name="surname" placeholder="Фамилия" required>
            <input type="text" name="login" placeholder="Логин" required>
            <input type="password" name="userPassword" placeholder="Пароль" required minlength="5">
            <input type="password" name="userPasswordRepeat" placeholder="Повторить пароль" required minlength="5">
            <input type="submit" value="Login" onSubmit="validateForm()" />
            <a href="../html/authorization.html">Авторизация</a>
        </form>
    </div>
    <script src="../js/registration.js"></script>
    <script src="../js/jquery-3.3.1.min.js"></script>
</body>
</html>