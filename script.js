document.querySelector("button").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = "admin";
    const passwd = "root";

    if (username !== user && password !== passwd) {
        document.getElementById("wrong").innerText = "Username and Password is Wrong!";
    } else if (username !== user) {
        document.getElementById("userX").innerText = "Username is Wrong!";
    } else if (password !== passwd) {
        document.getElementById("passX").innerText = "Password is Wrong!";
    } else {
        document.getElementById("good").innerText = "Access Granted!";
        setTimeout(() => {
            window.location.href = "mainpage.html";
        }, 3000);
    }
});

document.getElementById("showPassword").addEventListener("change", function(){
    const show = document.getElementById("password");

    if(this.checked) {
        show.type = "text";
    } else {
        show.type = "password";
    }
})

document.getElementById("username").addEventListener("focus", function(){
    this.value = "";
    document.getElementById("wrong").innerText = "";
    document.getElementById("userX").innerText = "";
    document.getElementById("passX").innerText = "";
})

document.getElementById("password").addEventListener("focus", function(){
    this.value = "";
    document.getElementById("wrong").innerText = "";
    document.getElementById("passX").innerText = "";
    document.getElementById("userX").innerText = "";
})
