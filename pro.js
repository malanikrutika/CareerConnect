// Navigation Functions

function openHome() {
    window.location.href = "index.html";
}

function openRegister() {
    window.location.href = "register.html";
}

function openCompanies() {
    window.location.href = "companies.html";
}

function openDashboard() {
    window.location.href = "dashboard.html";
}

function openContact() {
    window.location.href = "contact.html";
}


// Registration Form Validation

function validateForm() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let cgpa = document.getElementById("cgpa").value;

    if (name === "" || roll === "" || email === "" || cgpa === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Registration Successful!");
    return true;
}


// Company Search

function searchCompany() {

    let search =
        document.getElementById("search").value.toLowerCase();

    let companies = [
        "tcs",
        "infosys",
        "wipro",
        "accenture",
        "capgemini",
        "cognizant"
    ];

    let found = false;

    for (let i = 0; i < companies.length; i++) {

        if (search === companies[i]) {
            found = true;
            break;
        }
    }

    if (found) {
        document.getElementById("result").innerHTML =
            "Company Found";
    } else {
        document.getElementById("result").innerHTML =
            "Company Not Found";
    }
}


// Eligibility Checker

function checkEligibility() {

    let cgpa =
        parseFloat(document.getElementById("cgpaCheck").value);

    let result = "";

    if (cgpa >= 6)
        result += "TCS<br>";

    if (cgpa >= 6.5)
        result += "Infosys<br>";

    if (cgpa >= 7)
        result += "Wipro<br>";

    if (cgpa >= 7.5)
        result += "Accenture<br>";

    if (result === "")
        result = "Not eligible for any company";

    document.getElementById("eligibilityResult").innerHTML =
        result;
}


// Apply Company

function applyCompany(companyName) {

    alert("Successfully Applied for " + companyName);
}