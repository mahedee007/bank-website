document.getElementById("login-btn").addEventListener("click", function(){
    const userName = document.getElementById("user-name");
    const enterUserName = userName.value;
    const password = document.getElementById("password");
    const enterPassword = password.value;
    if(enterPassword == "secret" && enterUserName == "father"){
        window.location.href = "banking.html";

    }
})