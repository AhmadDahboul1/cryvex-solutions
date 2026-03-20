document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.getElementById('customSelect');
    const optionsBox = document.getElementById('optionsBox');
    const selectedText = document.getElementById('selectedVal');
    const hiddenInput = document.getElementById('hiddenServiceInput');
    const form = document.getElementById('contactForm');

// 1. OPEN/CLOSE DROPDOWN
        trigger.addEventListener('click', function(e) {
        optionsBox.classList.toggle('active');
        e.stopPropagation();
        });

// 2. HANDLE SELECTION
        document.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', function(e) {
        const choice = this.innerText;

// Update what the user sees
            selectedText.innerText = choice;
            selectedText.style.color = "#FFFFFF"; // Turn cyan when selected

// Update what Formspree receives
            hiddenInput.value = choice;

// Close menu
            optionsBox.classList.remove('active');
            });
            });

// 3. CLOSE IF CLICKED OUTSIDE
    window.addEventListener('click', () => optionsBox.classList.remove('active'));

// 4. FORM SUBMISSION
    form.addEventListener('submit', function(e) {

// Validation: Ensure a service was picked
        if (!hiddenInput.value) {
            e.preventDefault();
            alert("System Error: Please select a System Vertical.");
            return;
            }

// Show your high-tech console animation here before it sends...
        console.log("Transmission Initialized for: " + hiddenInput.value);
        });
});