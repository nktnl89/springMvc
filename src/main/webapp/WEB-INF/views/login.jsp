<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored ="false" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title>Authorization</title>
    <link rel="stylesheet" type="text/css" media="screen" href="styles/registration.css" />
</head>
<body>
    <div class="container">
        <div>Авторизация</div>
        <form name="authorizationForm" method="post"  action="login">
            <input type="text" name="login" placeholder="Логин" required>
            <input type="password" name="password" placeholder="Пароль" required>
            <input type="submit" onSubmit="login" />
            <c:out value="${error}" />
            <a href="registration">Регистрация</a>
        </form>
    </div>
</body>
</html>