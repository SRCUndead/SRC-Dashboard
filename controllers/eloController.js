// eloController.js

const ELOHistory = [];

// Function to update ELO ratings after races
function updateELO(racerId, newRating) {
    // Logic to update a racer's ELO rating
    console.log(`Updating ELO for Racer ID: ${racerId} with new rating: ${newRating}`);
    // Example update logic; replace with actual logic
    // Assuming ELOHistory stores previous ratings
    ELOHistory.push({ racerId, rating: newRating, date: new Date() });
}

// Function to get ELO rating history
function getELOHistory(racerId) {
    // Logic to fetch rating history for a racer
    return ELOHistory.filter(entry => entry.racerId === racerId);
}

module.exports = {
    updateELO,
    getELOHistory
};