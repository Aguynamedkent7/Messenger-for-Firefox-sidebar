// popup.js

console.log("Popup script running...");

document.getElementById("startPip").addEventListener("click", async () => {
  console.log("Button clicked. Attempting to open window...");

  try {
    // 1. Create the window and WAIT for it to confirm it opened
    await browser.windows.create({
      url: "https://m.facebook.com/messages/", // Using mobile link for better fit
      type: "popup",
      width: 450,
      height: 600
    });

    console.log("Window opened successfully.");
    
    // 2. Only close the small extension menu after success
    window.close();

  } catch (error) {
    // If it fails, this will print red text in the console
    console.error("FAILED to open window:", error);
  }
});