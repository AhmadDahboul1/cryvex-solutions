const surveyBtn = document.getElementById('requestSurvey');
const successPopup = document.getElementById('successPopup');

surveyBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Stop the page from reloading

    // 1. Show the "Thank You" Popup
    successPopup.style.display = "block";

    // 2. Optional: You can still open WhatsApp in the background
    const phoneNumber = "96171373855"; // Your actual number
    const message = "Hello Cryvex Solutions, I just requested a survey on your website.";

    // 3. Hide the popup automatically after 4 seconds
    setTimeout(() => {
        successPopup.style.display = "none";

        // 4. Redirect to WhatsApp after they read the thanks message
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }, 4000);
});