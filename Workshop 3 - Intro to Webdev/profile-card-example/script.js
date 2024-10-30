// Select the toggle button and extra info section
const toggleButton = document.getElementById("toggle-info-btn");
const extraInfoSection = document.getElementById("extra-info");

// Function to toggle the visibility of the extra info section
function toggleExtraInfo() {
  if (extraInfoSection.style.display === "none") {
    extraInfoSection.style.display = "block";
    toggleButton.textContent = "Show Less";
  } else {
    extraInfoSection.style.display = "none";
    toggleButton.textContent = "Show More";
  }
}

// Add event listener to toggle button
toggleButton.addEventListener("click", toggleExtraInfo);
