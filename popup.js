// popup.js
document.addEventListener('DOMContentLoaded', function() {
  const wordsPerChunkSlider = document.getElementById('words-per-chunk');
  const wordsPerMinuteSlider = document.getElementById('words-per-minute');
  const chunkValueDisplay = document.getElementById('chunk-value');
  const wpmValueDisplay = document.getElementById('wpm-value');
  const startButton = document.getElementById('start-reading');
  
  // Update displays when sliders change
  wordsPerChunkSlider.addEventListener('input', function() {
    chunkValueDisplay.textContent = this.value;
    saveSettings();
  });
  
  wordsPerMinuteSlider.addEventListener('input', function() {
    wpmValueDisplay.textContent = this.value;
    saveSettings();
  });
  
  // Load saved settings
  chrome.storage.sync.get(['wordsPerChunk', 'wordsPerMinute'], function(result) {
    if (result.wordsPerChunk) {
      wordsPerChunkSlider.value = result.wordsPerChunk;
      chunkValueDisplay.textContent = result.wordsPerChunk;
    }
    
    if (result.wordsPerMinute) {
      wordsPerMinuteSlider.value = result.wordsPerMinute;
      wpmValueDisplay.textContent = result.wordsPerMinute;
    }
  });
  
  // Save settings function
  function saveSettings() {
    chrome.storage.sync.set({
      wordsPerChunk: wordsPerChunkSlider.value,
      wordsPerMinute: wordsPerMinuteSlider.value
    });
  }
  
  // Start reading button
  startButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'startReading',
        wordsPerChunk: parseInt(wordsPerChunkSlider.value),
        wordsPerMinute: parseInt(wordsPerMinuteSlider.value)
      });
    });
    window.close();
  });
});
