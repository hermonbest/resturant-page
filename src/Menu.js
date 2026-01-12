export function loadMenu() {
    document.body.classList.remove('about-bg');
    document.body.classList.add('menu-bg');
    const page = document.createElement('div');
    page.classList.add('static-page', 'menu-page');
    page.innerHTML = `
        <h1>Our Menu</h1>
        <div class="menu-section" role="region" aria-labelledby="appetizers-heading">
            <h2 id="appetizers-heading">Appetizers</h2>
            <div class="menu-item" style="--item-index: 1;">
                <p><strong>Bruschetta:</strong> Toasted bread with tomatoes, garlic, and basil.</p>
                <p class="price">$12</p>
            </div>
            <div class="menu-item" style="--item-index: 2;">
                <p><strong>Calamari:</strong> Fried calamari with a side of marinara sauce.</p>
                <p class="price">$15</p>
            </div>
        </div>
        <div class="menu-section" role="region" aria-labelledby="mains-heading">
            <h2 id="mains-heading">Main Courses</h2>
            <div class="menu-item" style="--item-index: 3;">
                <p><strong>Spaghetti Carbonara:</strong> A classic Roman pasta dish with eggs, cheese, and pancetta.</p>
                <p class="price">$22</p>
            </div>
            <div class="menu-item" style="--item-index: 4;">
                <p><strong>Grilled Salmon:</strong> Served with roasted vegetables and a lemon-dill sauce.</p>
                <p class="price">$28</p>
            </div>
        </div>
        <div class="menu-section" role="region" aria-labelledby="desserts-heading">
            <h2 id="desserts-heading">Desserts</h2>
            <div class="menu-item" style="--item-index: 5;">
                <p><strong>Tiramisu:</strong> A coffee-flavored Italian dessert.</p>
                <p class="price">$10</p>
            </div>
            <div class="menu-item" style="--item-index: 6;">
                <p><strong>Cheesecake:</strong> A rich and creamy cheesecake with a graham cracker crust.</p>
                <p class="price">$9</p>
            </div>
        </div>
    `;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(page);
}
