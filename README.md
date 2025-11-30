Messenger Sidebar for Firefox 🦊💬

A seamless, "Always-On" Facebook Messenger client that lives directly in your Firefox Sidebar. This extension allows you to chat while browsing without switching tabs or windows.



✨ Features

    Native Sidebar Integration: Open Messenger with Ctrl+B (or Cmd+B on Mac) alongside your active tab.

    Smart Resume: Automatically remembers your last active conversation. If you close the sidebar and reopen it, you pick up exactly where you left off.

    Security Bypass: Implements a custom rule set to strip X-Frame-Options and Content-Security-Policy headers, allowing messenger.com to run inside an iframe.

    Zero-Lag State Tracking: Optimized content script (tracker.js) efficiently saves your location only when navigation changes, preventing browser stutter.

    Desktop Interface: Loads the full desktop Messenger experience, not the limited mobile view.

🛠️ Technical Implementation

This project uses Manifest V3 and leverages advanced WebExtension APIs:

    declarativeNetRequest: Modifies network responses to remove "Frame Busting" headers (X-Frame-Options: DENY) that normally prevent Messenger from being embedded.

    webRequest (Spoofing): Modifies the Referer header to trick Messenger into accepting the extension context.

    storage.local: Persists the user's navigation state across sessions.

📦 Installation

Option 1: Load from Source (Developer Mode)

    Clone this repository.

    Open Firefox and type about:debugging in the address bar.

    Click "This Firefox" > "Load Temporary Add-on...".

    Select the manifest.json file from the cloned folder.

Option 2: Permanent Install (.xpi)



    Download the .xpi file from the Releases section.

    Drag and drop the file into any open Firefox window.

    Click "Add" when prompted.

⚠️ Disclaimer

For Personal/Educational Use Only. This extension modifies security headers (Content-Security-Policy) for messenger.com and facebook.com to allow them to be embedded. While this is necessary for the sidebar to function, it technically lowers the specific "Clickjacking" protections for those domains within your browser. Use at your own discretion.

📜 License

All Rights Reserved.
