// content.js
console.log('hello');
// Wait for the DOM content to be loaded

// Get the entire HTML content of the page
const htmlContent = document.documentElement.outerHTML;
console.log(htmlContent);
// Send the HTML to the background script
chrome.runtime.sendMessage({ htmlContent });

  