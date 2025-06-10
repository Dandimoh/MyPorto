
document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;
    const profilePhoto = document.getElementById("profile-photo");
    const overlay = document.getElementById("photo-overlay");
    const clickSound = document.getElementById("click-sound");
  
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark");
      modeToggle.textContent = "☀️"; // Sun emoji for dark mode
    } else {
      body.classList.remove("dark");
      modeToggle.textContent = "🌙"; // Moon emoji for light mode
    }
  
    // Toggle Dark/Light Mode
    if (modeToggle) {
      modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDark = body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        modeToggle.textContent = isDark ? "☀️" : "🌙";
      });
    }
  
    // Fade-in Elements with Delay
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.3}s`;
    });
  
    // Profile Photo Click Event
    if (profilePhoto) {
      profilePhoto.addEventListener("click", () => {
        // Toggle focused class for enlarging photo
        profilePhoto.classList.toggle("focused");
        overlay.classList.toggle("active");
  
        // Play click sound if available
        if (clickSound) {
          clickSound.currentTime = 0;
          clickSound.play();
        }
      });
    }
  
    // Overlay Click to Close the Enlarged Photo
    if (overlay) {
      overlay.addEventListener("click", () => {
        profilePhoto.classList.remove("focused");
        overlay.classList.remove("active");
      });
    }
  });
  
