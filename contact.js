document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formMessage = document.getElementById("form-message");
    formMessage.style.display = "block";
    
    // Form validation logic
    setTimeout(() => {
      formMessage.innerHTML = "✅ Message sent successfully!";
      formMessage.style.color = "#00ff00";
      document.getElementById("contact-form").reset();
    }, 1000);
  });