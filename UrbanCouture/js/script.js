// Display a welcome message when the page loads
window.onload = function () {
    alert("Welcome to Urban Couture!\nWhere Style Meets Elegance.");
};

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Redirect to Products page
function goToProducts() {
    window.location.href = "products.html";
}

// Display product information
function showMessage(productName) {
    alert(productName + " is one of our premium collections.\nVisit our showroom for more information.");
}

function memberMessage(position){
    alert("Welcome!\n\nThis board member serves as the " + position + " of Urban Couture.");
}

// Appointment Form Validation

const form = document.getElementById("appointmentForm");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const service = document.getElementById("service").value;

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            date === "" ||
            time === "" ||
            service === ""
        ) {
            alert("Please complete all required fields.");
            return;
        }
        alert("Appointment booked successfully!\n\nThank you for choosing Urban Couture.");
        form.reset();
    });
}

// Event Registration

function registerEvent(eventName){
    alert(
        "Thank you for your interest in " +
        eventName +
        ".\n\nRegistration has been received!"
    );
}