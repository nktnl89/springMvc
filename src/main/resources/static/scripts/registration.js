$("#registrationForm").submit(function (event) {
    if($("#registrationForm").find('input[name="password"]').val()!=$("#registrationForm").find('input[name="passwordRepeat"]').val()){
        event.preventDefault();
        $(".error").text("Пароли не совпадают, попробуйте еще раз.");
    } else {
        $(".error").text("");
    }
});