async function fetchData() {
    try {
        const response = await fetch('/api/data'); // Calls the backend
        const data = await response.json();
        document.getElementById('output').innerText = data.message;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
