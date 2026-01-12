import { loadHome } from "./home";
import { loadAbout } from "./About";
import { loadMenu } from "./Menu";
import { loadBooking } from "./Booking";
import './styles.css';

function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const buttons = [
        { id: 'home', text: 'Home', loader: loadHome },
        { id: 'menu', text: 'Menu', loader: loadMenu },
        { id: 'about', text: 'About', loader: loadAbout },
    ];

    buttons.forEach(buttonInfo => {
        const button = document.createElement('button');
        button.id = buttonInfo.id;
        button.textContent = buttonInfo.text;
        button.addEventListener('click', () => {
            loadPage(buttonInfo.loader);
            setActiveTab(button.id);
        });
        nav.appendChild(button);
    });

    // Booking is handled separately on the home page, not as a full page load
    const bookingButton = document.createElement('button');
    bookingButton.id = 'booking';
    bookingButton.textContent = 'Booking';
    bookingButton.addEventListener('click', () => {
        loadPage(loadHome, () => {
            setActiveTab('home'); // Keep home active, booking is on home
            const bookingCard = document.querySelector('.booking-card');
            if (bookingCard) {
                bookingCard.scrollIntoView({ behavior: 'smooth' });
                loadBooking();
            }
        });
    });
    nav.appendChild(bookingButton);


    header.appendChild(nav);
    document.body.prepend(header);
}

function setActiveTab(buttonId) {
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    const activeButton = document.getElementById(buttonId);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function loadPage(loader, callback) {
    const content = document.getElementById('content');
    content.classList.add('fade-out');

    setTimeout(() => {
        loader();
        if(callback) callback();
        content.classList.remove('fade-out');
    }, 300); // Match CSS transition speed
}

function startWebsite() {
    createHeader();
    const content = document.getElementById('content');
    content.classList.add('fade-in'); // Initial load animation
    loadHome(() => {
      loadBooking();
    });
    setActiveTab('home');
    window.addEventListener('scroll', handleScroll);
}

startWebsite();
