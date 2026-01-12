export function loadAbout() {
    const page = document.createElement('div');
    page.classList.add('static-page', 'about-page');
    page.innerHTML = `
        <h1>Our Story</h1>
        <p>"The Gilded Spoon" was founded in 2023 with a passion for creating exceptional dining experiences. Our philosophy is simple: use high-quality, locally-sourced ingredients to craft delicious and innovative dishes.</p>
        <p>Our team of talented chefs and friendly staff are dedicated to making your visit a memorable one. We believe that a great meal is more than just food; it's about the atmosphere, the company, and the memories you create.</p>
    `;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(page);
}
