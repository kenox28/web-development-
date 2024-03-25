function forgotpass() {}

document.querySelector("#loginform").addEventListener("submit", valid);

function valid(event) {
    event.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let userIndex = accountuser.indexOf(user);
    let passIndex = accountuser.indexOf(pass);
    console.log(userIndex + passIndex);

    if (userIndex !== -1 && passIndex !== -1 && userIndex === passIndex) {
        alert("Login successful");
        window.location.href = "../1/iquenproject1.html";
    } else {
        alert("Login failed");
    }

    console.log("kakapoy ba");
}
