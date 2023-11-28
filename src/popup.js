document.addEventListener('DOMContentLoaded', function () {
    
    function handleAutofillButtonClick() {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentUrl = tabs[0]?.url || 'No URL found';
        console.log('Button clicked! AutoFill event triggered on:', currentUrl);
      });
    }
    document.getElementById('autofillButton')?.addEventListener('click', handleAutofillButtonClick);
  });
  