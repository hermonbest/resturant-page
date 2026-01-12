import heroImage from './assets/hero.jpg';
import gallery1 from './assets/gallery1.jpg';
import gallery2 from './assets/gallery2.jpg';

function createHeroSection() {
    const hero = document.createElement('section');
    hero.classList.add('hero');

    const heroBg = document.createElement('div');
    heroBg.classList.add('hero-bg');
    const heroImageEl = new Image();
    heroImageEl.src = heroImage;
    heroBg.appendChild(heroImageEl);

    const heroOverlay = document.createElement('div');
    heroOverlay.classList.add('hero-overlay');

    const bookingCard = document.createElement('div');
    bookingCard.classList.add('booking-card');
    bookingCard.innerHTML = `
        <h1>Book a Table</h1>
        <p>Experience the finest dining in town.</p>
        <div id="booking-flow-container"></div>
    `;

    hero.appendChild(heroBg);
    hero.appendChild(heroOverlay);
    hero.appendChild(bookingCard);

    return hero;
}

function createInfoSection() {
    const info = document.createElement('section');
    info.classList.add('info-section');
    info.innerHTML = `
        <h2>Discover Our Passion</h2>
        <p>At The Gilded Spoon, we believe in creating unforgettable moments through exceptional food and a warm, inviting atmosphere. Our chefs craft every dish with artistry, using locally-sourced ingredients to ensure every bite is a revelation.</p>
    `;
    return info;
}

function createGallerySection() {
    const gallery = document.createElement('section');
    gallery.classList.add('gallery-section');
    gallery.innerHTML = '<h2>Ambiance & Atmosphere</h2>';

    const galleryGrid = document.createElement('div');
    galleryGrid.classList.add('gallery-grid');

    const images = [gallery1, gallery2];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
        galleryGrid.appendChild(img);
    });

    gallery.appendChild(galleryGrid);
    return gallery;
}

export function loadHome(callback) {
    document.body.classList.remove('menu-bg', 'about-bg');
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const heroSection = createHeroSection();
    const infoSection = createInfoSection();
    const gallerySection = createGallerySection();

    contentDiv.appendChild(heroSection);
    contentDiv.appendChild(infoSection);
    contentDiv.appendChild(gallerySection);

    if (callback) {
        callback();
    }
}
