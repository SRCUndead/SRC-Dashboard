const express = require('express');
const router = express.Router();

// Mock database for races and results
let races = [];
let raceResults = {};

// Create a new race
router.post('/races', (req, res) => {
    const { name, date } = req.body;
    const race = { id: races.length + 1, name, date, lapTimes: [] };
    races.push(race);
    res.status(201).json(race);
});

// Submit results for a race
router.post('/races/:id/results', (req, res) => {
    const raceId = parseInt(req.params.id);
    const { racerName, lapTime } = req.body;

    if (!races.find(race => race.id === raceId)) {
        return res.status(404).json({ error: 'Race not found' });
    }

    if (!raceResults[raceId]) {
        raceResults[raceId] = [];
    }
    raceResults[raceId].push({ racerName, lapTime });
    res.status(201).json({ message: 'Result submitted' });
});

// Get lap times for a specific race
router.get('/races/:id/lap-times', (req, res) => {
    const raceId = parseInt(req.params.id);
    const results = raceResults[raceId] || [];
    res.json(results);
});

// Calculate race standings
router.get('/races/:id/standings', (req, res) => {
    const raceId = parseInt(req.params.id);
    const results = raceResults[raceId] || [];

    const standings = results.reduce((acc, { racerName, lapTime }) => {
        if (!acc[racerName]) {
            acc[racerName] = 0;
        }
        acc[racerName] += lapTime;
        return acc;
    }, {});

    const sortedStandings = Object.entries(standings)
        .map(([racerName, totalLapTime]) => ({ racerName, totalLapTime }))
        .sort((a, b) => a.totalLapTime - b.totalLapTime);

    res.json(sortedStandings);
});

module.exports = router;