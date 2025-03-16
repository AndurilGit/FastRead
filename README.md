# FastRead
Speed Reader Chrome Extension
Overview
Speed Reader is a Chrome extension designed to improve reading speed by displaying text in controlled chunks. This extension allows you to select any text on a webpage and read it using the Rapid Serial Visual Presentation (RSVP) technique, where text is displayed a few words at a time at a controlled pace.
Features

Select any text on any webpage
Customize reading speed (words per minute)
Adjust chunk size (1-5 words per display)
Simple, distraction-free reading interface
Progress continues automatically until completion

Installation
Method 1: Install from Source

Download or clone this repository to your local machine
Open Chrome and navigate to chrome://extensions/
Enable "Developer mode" using the toggle in the top-right corner
Click "Load unpacked" and select the folder containing the extension files
The Speed Reader extension icon should now appear in your browser toolbar

Required Files
Make sure your extension folder contains these files:

manifest.json: Extension configuration
popup.html: Settings interface
popup.js: Controller for settings
content.js: Main functionality
styles.css: Visual styling
icons/: Folder containing icon images (16px, 48px, 128px)

How to Use

Navigate to any webpage containing text you want to read
Select the text by highlighting it with your cursor
Click the Speed Reader icon in your Chrome toolbar
Adjust your settings:

Words per chunk: Number of words displayed at once (1-5)
Reading speed: Words per minute (100-800 WPM)


Click "Start Speed Reading"
The selected text will appear in the center of your screen
To exit, click the X button or press Escape

Tips for Effective Speed Reading

Start with a comfortable reading speed (around 300 WPM) and gradually increase
Begin with 2-3 words per chunk before trying single-word display
Practice regularly for 10-15 minutes per day
Focus on comprehension, not just speed
For best results, use content you're somewhat familiar with when first practicing

Troubleshooting
Extension not appearing in toolbar

Make sure the extension is enabled in Chrome's extension manager
Try restarting Chrome

"No text selected" message

Highlight text before clicking the extension icon
Make sure your selection contains readable text

Reading too fast/slow

Adjust the WPM slider in the popup menu
Lower WPM for complex material, higher for familiar content

Privacy
Speed Reader works entirely within your browser and does not:

Collect or transmit your reading data
Require any online services
Track your browsing habits

License
This project is available as open source under the terms of the MIT License.
Developer Notes
The extension uses:

Chrome Extension Manifest V3
Local storage for saving user preferences
Content scripts for interacting with webpage content
