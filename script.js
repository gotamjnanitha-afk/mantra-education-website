// Welcome message
window.onload = function () {
    alert("Welcome to EduLearn! Start your learning journey with us.");
};

// Contact Form Validation
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();

        if (name === "" || email === "" || phone === "") {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Thank you! Your form has been submitted successfully.");

        form.reset();
    });
} 