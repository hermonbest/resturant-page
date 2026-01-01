export function loadHome() {
    const page = document.createElement('div');
    page.classList.add('home-content');
    page.innerHTML = `
        <h1>Experience Culinary Excellence</h1>
        <p>Welcome to "The Gilded Spoon," where we blend traditional flavors with a modern twist. Our chefs use only the freshest ingredients to create unforgettable dishes. Join us for a dining experience that tantalizes the senses.</p>
        <p>Book a table now and discover your new favorite restaurant.</p>
    `;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(page);
    console.log("Home page loaded");
}
