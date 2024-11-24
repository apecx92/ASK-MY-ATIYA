// Function to navigate between screens
function navigateTo(screenId) {
    // Hide all screens
    document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.remove("active");
    });

    // Show the target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add("active");
    } else {
        console.error(`Screen with ID "${screenId}" not found.`);
    }
}

// Countdown calculation function
function startCountdown(startDate) {
    const countdownDisplay = document.getElementById("countdown-display");

    // Update countdown every second
    setInterval(() => {
        const now = new Date();
        const elapsed = now - startDate; // Time elapsed in milliseconds

        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsed / 1000) % 60);

        // Update the countdown display
        countdownDisplay.innerHTML = `
            <div>${days} <span>Days</span></div>
            <div>${hours} <span>Hrs</span></div>
            <div>${minutes} <span>Mins</span></div>
            <div>${seconds} <span>Secs</span></div>
        `;
    }, 1000);
}

// Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
    // Activate the home screen by default
    document.getElementById("home").classList.add("active");

    // Start the countdown timer (change the start date here)
    const startDate = new Date("2023-04-01T00:00:00"); // Example: April 1, 2023
    startCountdown(startDate);
});
