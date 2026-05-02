fetch('./components/navbar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Navbar file not found');
        }
        return response.text();
    })
    .then(html => {
        const container = document.getElementById('navbar');
        if (container) {
            container.innerHTML = html;
        }
    })
    .catch(error => console.error('Error loading navbar:', error));
