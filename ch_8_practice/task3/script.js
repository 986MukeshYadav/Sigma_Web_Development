async function fetchWebsiteContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parsing the JSON response
        document.getElementById('content').innerText = data.activity;
        console.log(data.activity);
    } catch (error) {
        console.error('Fetching content failed:', error);
    }
}

// URL of the API to fetch content from
const url = 'https://www.boredapi.com/api/activity'; // Public API URL

// Fetch content immediately on load
fetchWebsiteContent(url);

// Fetch content every 5 seconds
setInterval(() => {
    fetchWebsiteContent(url);
}, 5000);
