export function loadMenu() {
    const page = document.createElement('div');
    page.innerHTML = `
        <h1>Our Menu</h1>
        <h2>Appetizers</h2>
        <p><strong>Bruschetta:</strong> Toasted bread with tomatoes, garlic, and basil. - $12</p>
        <p><strong>Calamari:</strong> Fried calamari with a side of marinara sauce. - $15</p>
        <h2>Main Courses</h2>
        <p><strong>Spaghetti Carbonara:</strong> A classic Roman pasta dish with eggs, cheese, and pancetta. - $22</p>
        <p><strong>Grilled Salmon:</strong> Served with roasted vegetables and a lemon-dill sauce. - $28</p>
        <h2>Desserts</h2>
        <p><strong>Tiramisu:</strong> A coffee-flavored Italian dessert. - $10</p>
        <p><strong>Cheesecake:</strong> A rich and creamy cheesecake with a graham cracker crust. - $9</p>
    `;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(page);
    console.log("Menu page loaded");
}
