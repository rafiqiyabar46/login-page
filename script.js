function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "yabar" && password === "yabar") {
        document.getElementById("message").innerText = "Login successful!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").innerText = "Invalid credentials!";
        document.getElementById("message").style.color = "red";
    }
}
