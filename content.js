// content.js
let isReading = false;
let readerContainer = null;
let interval = null;

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startReading') {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      startSpeedReading(selectedText, request.wordsPerChunk, request.wordsPerMinute);
    } else {
      alert('Please select some text first!');
    }
  }
});

// Create reader UI
function createReaderUI() {
  // Create container if it doesn't exist
  if (!readerContainer) {
    readerContainer = document.createElement('div');
    readerContainer.className = 'speed-reader-container';
    
    // Create display area for words
    const displayArea = document.createElement('div');
    displayArea.className = 'speed-reader-display';
    
    // Create control bar
    const controlBar = document.createElement('div');
    controlBar.className = 'speed-reader-controls';
    
    // Close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.className = 'speed-reader-close';
    closeButton.addEventListener('click', stopSpeedReading);
    
    // Add elements to container
    controlBar.appendChild(closeButton);
    readerContainer.appendChild(displayArea);
    readerContainer.appendChild(controlBar);
    
    // Add to page
    document.body.appendChild(readerContainer);
  }
  
  return readerContainer.querySelector('.speed-reader-display');
}

// Start speed reading
function startSpeedReading(text, wordsPerChunk, wordsPerMinute) {
  if (isReading) stopSpeedReading();
  isReading = true;
  
  // Calculate delay between chunks based on WPM
  const msPerWord = 60000 / wordsPerMinute;
  const chunkDelay = msPerWord * wordsPerChunk;
  
  // Split text into words
  const words = text.split(/\s+/);
  const chunks = [];
  
  // Create chunks of words
  for (let i = 0; i < words.length; i += wordsPerChunk) {
    const chunk = words.slice(i, i + wordsPerChunk).join(' ');
    chunks.push(chunk);
  }
  
  // Get display area
  const displayArea = createReaderUI();
  let currentIndex = 0;
  
  // Dim the rest of the page
  document.body.classList.add('speed-reader-active');
  
  // Display first chunk
  displayArea.textContent = chunks[currentIndex];
  currentIndex++;
  
  // Start interval to display chunks
  interval = setInterval(() => {
    if (currentIndex >= chunks.length) {
      stopSpeedReading();
      return;
    }
    
    displayArea.textContent = chunks[currentIndex];
    currentIndex++;
  }, chunkDelay);
}

// Stop speed reading
function stopSpeedReading() {
  if (!isReading) return;
  
  clearInterval(interval);
  isReading = false;
  
  if (readerContainer) {
    document.body.removeChild(readerContainer);
    readerContainer = null;
  }
  
  document.body.classList.remove('speed-reader-active');
}
