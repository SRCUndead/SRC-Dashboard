// eloCalculator.js

/**
 * Calculates ELO rating changes based on race results and driver performance.
 *
 * @param {number} currentElo - The current ELO rating of the driver.
 * @param {number} opponentElo - The ELO rating of the opponent.
 * @param {boolean} won - Indicates whether the driver won the race.
 * @returns {number} - The new ELO rating after the race.
 */
function calculateElo(currentElo, opponentElo, won) {
    const K = 32; // K-factor for ELO calculations
    const expectedScore = 1 / (1 + Math.pow(10, (opponentElo - currentElo) / 400));
    const actualScore = won ? 1 : 0;

    const newElo = currentElo + K * (actualScore - expectedScore);
    return Math.round(newElo);
}

// Sample usage
const currentElo = 1600;
const opponentElo = 1500;
const won = true;
const newElo = calculateElo(currentElo, opponentElo, won);
console.log(`New ELO rating: ${newElo}`);

module.exports = { calculateElo };