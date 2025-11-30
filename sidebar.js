// sidebar.js

// Read the last saved URL from storage
browser.storage.local.get(["last_messenger_url"], function(result) {
  const frame = document.getElementById("msgFrame");
  
  if (result.last_messenger_url) {
    // Restore the last conversation
    console.log("Restoring:", result.last_messenger_url);
    frame.src = result.last_messenger_url;
  } else {
    // Default to home
    frame.src = "https://www.messenger.com/t/";
  }
});