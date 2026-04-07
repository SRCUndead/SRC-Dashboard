// dashboard.js

// Function to fetch data from API
async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to establish socket.io connection
function setupSocket(socketUrl) {
    const socket = io(socketUrl);
    socket.on('dataUpdate', (data) => {
        updateUI(data);
    });
    socket.on('connect', () => {
        console.log('Connected to socket server');
    });
    socket.on('disconnect', () => {
        console.log('Disconnected from socket server');
    });
}

// Function to update UI with new data
function updateUI(data) {
    const dashboardElement = document.getElementById('dashboard');
    dashboardElement.innerHTML = JSON.stringify(data, null, 2);
}

// Example usage
fetchData('https://api.example.com/data');
setupSocket('https://socket.example.com');