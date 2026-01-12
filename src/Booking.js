// --- UI Component Creation ---

function createGuestSelector() {
    const guestSelector = document.createElement('div');
    guestSelector.classList.add('booking-step');
    guestSelector.innerHTML = `
        <label for="guests">Guests</label>
        <div class="guest-input-wrapper">
            <button id="decrement-guests" aria-label="Decrease number of guests">-</button>
            <input type="text" id="guests" value="2" readonly>
            <button id="increment-guests" aria-label="Increase number of guests">+</button>
        </div>
    `;
    return guestSelector;
}

function createDatePicker() {
    const datePicker = document.createElement('div');
    datePicker.classList.add('booking-step');
    const today = new Date().toISOString().split('T')[0];
    datePicker.innerHTML = `
        <label for="date">Date</label>
        <input type="date" id="date" name="date" value="${today}" min="${today}">
    `;
    return datePicker;
}

function createTimeSlotsContainer() {
    const timeSlots = document.createElement('div');
    timeSlots.classList.add('booking-step');
    timeSlots.id = 'time-slots-container';
    timeSlots.innerHTML = `<label>Time</label><div class="time-slots"></div>`;
    return timeSlots;
}

// --- Interaction Logic ---

function handleGuestSelection() {
    const guestsInput = document.getElementById('guests');
    const decrementBtn = document.getElementById('decrement-guests');
    const incrementBtn = document.getElementById('increment-guests');
    let guestCount = parseInt(guestsInput.value, 10);

    decrementBtn.addEventListener('click', () => {
        if (guestCount > 1) {
            guestCount--;
            guestsInput.value = guestCount;
        }
    });

    incrementBtn.addEventListener('click', () => {
        if (guestCount < 12) { // Max 12 guests
            guestCount++;
            guestsInput.value = guestCount;
        }
    });
}

function populateTimeSlots() {
    const timeSlotsContainer = document.querySelector('.time-slots');
    timeSlotsContainer.innerHTML = ''; // Clear previous slots

    // Mocked availability
    const availableTimes = [
        { time: '17:00', status: 'available' }, { time: '17:30', status: 'available' },
        { time: '18:00', status: 'limited' }, { time: '18:30', status: 'available' },
        { time: '19:00', status: 'full' }, { time: '19:30', status: 'available' },
        { time: '20:00', status: 'limited' }, { time: '20:30', status: 'full' },
        { time: '21:00', status: 'available' },
    ];

    availableTimes.forEach(slot => {
        const timeButton = document.createElement('button');
        timeButton.textContent = slot.time;
        timeButton.classList.add('time-slot', `time-slot-${slot.status}`);
        if (slot.status !== 'full') {
            timeButton.addEventListener('click', () => {
                const selected = document.querySelector('.time-slot.selected');
                if (selected) selected.classList.remove('selected');
                timeButton.classList.add('selected');
                showGuestDetailsForm();
            });
        } else {
            timeButton.disabled = true;
        }
        timeSlotsContainer.appendChild(timeButton);
    });
}

function showGuestDetailsForm() {
    const bookingCard = document.querySelector('.booking-card');
    const bookingDetails = {
        guests: document.getElementById('guests').value,
        date: document.getElementById('date').value,
        time: document.querySelector('.time-slot.selected').textContent,
    };

    bookingCard.innerHTML = `
        <h2>Confirm Your Booking</h2>
        <p>Table for ${bookingDetails.guests} on ${bookingDetails.date} at ${bookingDetails.time}</p>
        <form id="guest-details-form" class="guest-details-form">
            <input type="text" id="guest-name" placeholder="Full Name" required>
            <input type="email" id="guest-email" placeholder="Email Address" required>
            <button type="submit" class="cta-button">Confirm Booking</button>
        </form>
    `;

    document.getElementById('guest-details-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showConfirmationScreen(bookingDetails);
    });
}

function showConfirmationScreen(bookingDetails) {
    const bookingCard = document.querySelector('.booking-card');
    const guestName = document.getElementById('guest-name').value;

    bookingCard.innerHTML = `
        <div class="confirmation-content">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <h2>Booking Confirmed!</h2>
            <p>Thank you, ${guestName}. Your table for ${bookingDetails.guests} on ${bookingDetails.date} at ${bookingDetails.time} is confirmed.</p>
        </div>
    `;
}


// --- Main Load Function ---

export function loadBooking() {
    const bookingContainer = document.getElementById('booking-flow-container');
    if (!bookingContainer) {
        console.error('Booking flow container not found on the page.');
        return;
    }

    bookingContainer.innerHTML = '';
    const bookingFlow = document.createElement('div');
    bookingFlow.classList.add('booking-flow');

    const guestSelector = createGuestSelector();
    const datePicker = createDatePicker();
    const timeSlotsContainer = createTimeSlotsContainer();
    const findTableBtn = document.createElement('button');
    findTableBtn.id = 'find-table-btn';
    findTableBtn.textContent = 'Find a Table';
    findTableBtn.classList.add('cta-button');

    bookingFlow.appendChild(guestSelector);
    bookingFlow.appendChild(datePicker);
    bookingFlow.appendChild(timeSlotsContainer);
    bookingFlow.appendChild(findTableBtn);
    bookingContainer.appendChild(bookingFlow);

    // Attach event listeners
    handleGuestSelection();
    findTableBtn.addEventListener('click', populateTimeSlots);
}
