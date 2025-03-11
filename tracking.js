document.getElementById("tracking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const trackingId = document.getElementById("tracking-id").value;
    const statusMessage = document.getElementById("status-message");

    // Simulated tracking status (This can be connected to a backend API)
    const trackingStatuses = {
        "LSD123": "🚗 Your car is on the way!",
        "LSD456": "🏁 Your car has arrived!",
        "LSD789": "🛠️ Your car is in maintenance!"
    };

    // Check tracking ID
    if (trackingStatuses[trackingId]) {
        statusMessage.innerHTML = trackingStatuses[trackingId];
    } else {
        statusMessage.innerHTML = "❌ Invalid tracking ID! Please check again.";
    }
});
