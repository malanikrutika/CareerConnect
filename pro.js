// navigation
function openRegister() {
    window.location.href = "register.html";
}

// register validation only
function validateForm() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let cgpa = document.getElementById("cgpa").value;

    if (!name || !roll || !email || !cgpa) {
        alert("Please fill all fields!");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

// search
function searchCompany() {

    let s = document.getElementById("search").value.toLowerCase();

    if (s === "tcs" || s === "infosys" || s === "wipro") {
        document.getElementById("result").innerText = "Company Found ✔";
    } else {
        document.getElementById("result").innerText = "Not Found ❌";
    }
}

// apply
// function applyCompany(company) {
//     alert("Applied for " + company);
// }

// contact
function sendMessage() {
    alert("Message Sent Successfully!");
    return false;
}