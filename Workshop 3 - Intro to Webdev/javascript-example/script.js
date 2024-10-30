// Select elements to work with
const toggleButton = document.getElementById("toggle-button");
const extraInfoSection = document.getElementById("extra-info");

// Function to toggle the display of the extra information section
function toggleExtraInfo() {
  if (extraInfoSection.style.display === "none") {
    extraInfoSection.style.display = "block";
    toggleButton.textContent = "Show Less"; // Update button text
  } else {
    extraInfoSection.style.display = "none";
    toggleButton.textContent = "Show More"; // Update button text
  }
}

// Attach event listener to the button
toggleButton.addEventListener("click", toggleExtraInfo);
