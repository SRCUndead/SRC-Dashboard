const socket = require('socket.io');

// Function to handle real-time lap timing data
function handleLapTimingData(lapData) {
    // Process the lap timing data
    console.log('Lap Data Received:', lapData);
    // Broadcast lap timing data to all connected clients
    socket.emit('lapTimingUpdate', lapData);
}

// Function to initialize socket.io
function initializeSocket(server) {
    const io = socket(server);

    io.on('connection', (socket) => {
        console.log('A user connected');
        // Additional setup for socket connection can go here

        // Handle disconnection
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
}

module.exports = { handleLapTimingData, initializeSocket };