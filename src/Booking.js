export function loadBooking() {
    const page = document.createElement('div');
    page.classList.add('booking-content');
    page.innerHTML = `
        <h1>Book a Table</h1>
        <form id="booking-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="date">Date:</label>
            <input type="date" id="date" name="date" required>
            <label for="time">Time:</label>
            <input type="time" id="time" name="time" required>
            <label for="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" required>
            <button type="submit">Book Now</button>
        </form>
    `;
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(page);

    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;

            const confirmationMessage = document.createElement('div');
            confirmationMessage.innerHTML = `
                <h2>Booking Confirmation</h2>
                <p>Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been booked.</p>
            `;
            contentDiv.innerHTML = '';
            contentDiv.appendChild(confirmationMessage);
        });
    }

    console.log("Booking page loaded");
}
