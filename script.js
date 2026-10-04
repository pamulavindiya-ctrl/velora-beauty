// Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a navigation link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// Appointment Form

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you! Your appointment request has been received. We will contact you shortly."
    );

    bookingForm.reset();

});