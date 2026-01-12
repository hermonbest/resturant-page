export function loadMenu() {
    const page = document.createElement('div');
    page.classList.add('static-page', 'menu-page');
    page.innerHTML = `
        <h1>Our Menu</h1>
        <div class="menu-section">
            <h2>Appetizers</h2>
            <div class="menu-item">
                <p><strong>Bruschetta:</strong> Toasted bread with tomatoes, garlic, and basil.</p>
                <p class="price">$12</p>
            </div>
            <div class="menu-item">
                <p><strong>Calamari:</strong> Fried calamari with a side of marinara sauce.</p>
                <p class="price">$15</p>
            </div>
        </div>
        <div class="menu-section">
            <h2>Main Courses</h2>
            <div class="menu-item">
                <p><strong>Spaghetti Carbonara:</strong> A classic Roman pasta dish with eggs, cheese, and pancetta.</p>
                <p class="price">$22</p>
            </div>
            <div class="menu-item">
                <p><strong>Grilled Salmon:</strong> Served with roasted vegetables and a lemon-dill sauce.</p>
                <p class="price">$28</p>
            </div>
        </div>
        <div class="menu-section">
            <h2>Desserts</h2>
            <div class="menu-item">
                <p><strong>Tiramisu:</strong> A coffee-flavored Italian dessert.</p>
                <p class="price">$10</p>
            </div>
            <div class="menu-item">
                <p><strong>Cheesecake:</strong> A rich and creamy cheesecake with a graham cracker crust.</p>
                <p class="price">$9</p>
            </div>
        </div>
    `;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(page);
}
