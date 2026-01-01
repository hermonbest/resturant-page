import { loadHome } from "./home";
import { loadAbout } from "./About";
import { loadMenu } from "./Menu";
import { loadBooking } from "./Booking";
import './styles.css';

function setActiveTab(buttonId) {
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(buttonId).classList.add('active');
}
function startWebsite() {
loadHome();
    document.querySelector('#home').addEventListener('click', () => {
    loadHome();
    setActiveTab('home');});
    
    document.querySelector('#about').addEventListener('click', () => {
    loadAbout();
    setActiveTab('about');});
    document.querySelector('#menu').addEventListener('click', () => {
    loadMenu();
    setActiveTab('menu');});
    document.querySelector('#booking').addEventListener('click', () => {
    loadBooking();
    setActiveTab('booking');});
}
startWebsite();


    
