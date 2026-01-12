import gallery3 from './assets/gallery3.jpg';

export function loadAbout() {
    document.body.classList.remove('menu-bg');
    document.body.classList.add('about-bg');
    const page = document.createElement('div');
    page.classList.add('static-page', 'about-page');
    page.innerHTML = `
        <h1>Our Story</h1>
    `;
    const img = document.createElement('img');
    img.src = gallery3;
    img.alt = "Our passionate team at The Gilded Spoon";
    img.classList.add('about-image');
    img.loading = 'lazy';
    page.appendChild(img);
    page.innerHTML += `
        <p class="typewriter">"The Gilded Spoon" was founded in 2023 with a passion for creating exceptional dining experiences. Our philosophy is simple: use high-quality, locally-sourced ingredients to craft delicious and innovative dishes.</p>
        <p class="typewriter">Our team of talented chefs and friendly staff are dedicated to making your visit a memorable one. We believe that a great meal is more than just food; it's about the atmosphere, the company, and the memories you create.</p>
        <blockquote class="team-quote">"Cooking is like love. It should be entered into with abandon or not at all." – Harriet van Horne</blockquote>
        <button class="cta-button about-cta">Reserve Your Table</button>
    `;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(page);
}
