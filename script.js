// Add interactivity to the ticket form
const ticketForm = document.getElementById('ticketForm');

ticketForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    const match = document.getElementById('match').value;
    const quantity = document.getElementById('quantity').value;

    if (quantity <= 0) {
        alert('Please enter a valid number of tickets.');
        return;
    }

    alert(`You have successfully purchased ${quantity} tickets for ${match}!`);

    // Reset the form
    ticketForm.reset();
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
    });
});
