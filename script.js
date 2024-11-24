// Navigation between screens
function navigateTo(screenId) {
    document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

// Countdown Logic (Example Static Value)
const startDate = new Date("2023-04-01"); // Replace with your start date
const today = new Date();
const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("days").textContent = daysTogether;
