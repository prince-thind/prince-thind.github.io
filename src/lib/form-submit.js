export default function LinkFormWithGoogleSheet() {
  const form = document.querySelector("#contact-form");
  form.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Replace with your email address
  const recipient = "your-email@example.com";
  const subject = encodeURIComponent(data.subject || "New Contact Form Submission");

  // Formats all form fields into the email body
  let bodyText = "";
  for (const [key, value] of Object.entries(data)) {
    bodyText += `${key}: ${value}\n`;
  }
  const body = encodeURIComponent(bodyText);

  // Open default email client
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

  displayFormResult({
    message: "Opening your email client...",
    style: "success",
  });
}

function displayFormResult(data) {
  const formResultDiv = document.querySelector("#form-result");
  formResultDiv.textContent = data.message;
  formResultDiv.className = data.style || "";
}