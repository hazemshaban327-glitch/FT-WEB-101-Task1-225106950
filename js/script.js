const themeButton = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeButton.setAttribute("aria-pressed", isDark);
  themeButton.textContent = isDark ? "Switch to light mode" : "Toggle dark mode";
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const visitorName = document.getElementById("visitor-name").value.trim();
  formMessage.textContent = `Thank you, ${visitorName}! Your details have been entered.`;
  contactForm.reset();
});
