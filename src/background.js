chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.htmlContent) {
      htmlContainer.innerText = message.htmlContent;
      console.log('hello');
    }
  });