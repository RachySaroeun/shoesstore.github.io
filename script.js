/* script.js */
// This script handles Buy Now button clicks

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buy-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      alert(
        "Thank you for your purchase! This feature will be available soon."
      );
    });
  });
});

// Future features can include:
// - Shopping cart logic
// - Product filtering
// - User login system
// - Backend API calls
