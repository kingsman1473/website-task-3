document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const formMessages = document.getElementById("form-messages");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessages.innerHTML = "";

    const name = sanitizeInput(document.getElementById("name").value.trim());
    const email = sanitizeInput(document.getElementById("email").value.trim());
    const message = sanitizeInput(
      document.getElementById("message").value.trim()
    );

    let isValid = true;

    if (name.length < 3) {
      isValid = false;
      formMessages.innerHTML +=
        "<p>Name must be at least 3 characters long.</p>";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      formMessages.innerHTML += "<p>Invalid email address.</p>";
    }

    if (message.length < 10) {
      isValid = false;
      formMessages.innerHTML +=
        "<p>Message must be at least 10 characters long.</p>";
    }

    if (isValid) {
      formMessages.innerHTML = "<p>Form submitted successfully!</p>";
      // Here you can add code to actually submit the form data to a server
    }
  });
});

function sanitizeInput(input) {
  const temp = document.createElement("div");
  temp.textContent = input;
  return temp.innerHTML;
}
