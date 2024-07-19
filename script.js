$(document).ready(function() {
    // You can add your custom logic here when the button is clicked
    $("#btn").click(function() {
      alert("Order placed!");
      // Add more functionality here, like opening a modal, redirecting to a page, etc.
    });
  });
document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  
  for (const link of navLinks) {
      link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      
      window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
      });
  }

  // Order Now button alert
  const orderButton = document.querySelector(".btn");
  orderButton.addEventListener("click", function() {
      alert("Order Now functionality coming soon!");
  });

  // Form validation
  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      validateForm();
  });

  function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || phone === "" || message === "") {
          alert("All fields are required!");
          return false;
      }

      // Simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address!");
          return false;
      }

      alert("Form submitted successfully!");
      return true;
  }
});

