// tracker.js - Optimized

let lastSavedUrl = "";

// Check every 2 seconds (less frequent to stop lag)
setInterval(() => {
    const currentUrl = window.location.href;

    // Only save if the URL is DIFFERENT from the last save
    if (currentUrl !== lastSavedUrl) {
        lastSavedUrl = currentUrl;
        
        // Use 'browser' API for Firefox
        // We use a try-catch block to prevent errors if the extension context is invalid
        try {
            browser.storage.local.set({ "last_messenger_url": currentUrl });
        } catch (e) {
            // checking for errors silently
        }
    }
}, 2000);