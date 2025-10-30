// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  themeToggle.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact form (UI only)
function handleContact() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("contact-feedback");

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = `Thanks, ${name}! Message previewed (UI only).`;
    feedback.style.color = "green";
  }
}

// ===== Back to Top Button =====

// Create button element
const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "⬆️";
backToTopBtn.id = "backToTop";
backToTopBtn.title = "Go to top";
document.body.appendChild(backToTopBtn);

// Style button with JS (optional — better to move to CSS)
backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "25px";
backToTopBtn.style.right = "25px";
backToTopBtn.style.padding = "10px 14px";
backToTopBtn.style.fontSize = "18px";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "50%";
backToTopBtn.style.background = "#333";
backToTopBtn.style.color = "#fff";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.display = "none";
backToTopBtn.style.transition = "opacity 0.3s ease, transform 0.3s ease";
backToTopBtn.style.zIndex = "1000";

// Show button when scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.transform = "scale(1)";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.transform = "scale(0)";
    setTimeout(() => (backToTopBtn.style.display = "none"), 300);
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
