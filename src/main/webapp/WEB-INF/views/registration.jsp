<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored ="false" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title>Registration</title>
    <link rel="stylesheet" type="text/css" media="screen" href="styles/registration.css" />
</head>
<body>
    <div class="container">
        <div>Регистрация</div>
        <form id="registrationForm" method="post" action="registration" >
            <input type="text" name="name" placeholder="Имя" required>
            <input type="text" name="surname" placeholder="Фамилия" required>
            <input type="text" name="login" placeholder="Логин" required>
            <input type="password" name="password" placeholder="Пароль" required minlength="3">
            <input type="password" name="passwordRepeat" placeholder="Повторить пароль" required minlength="3">
            <input type="submit" value="Регистрация"/>
            <a href="login">Авторизация</a>
        </form>
        <c:out value="${error}" />
    </div>
    <script src="scripts/jquery-3.3.1.min.js"></script>
    <script src="scripts/registration.js"></script>
</body>
</html>