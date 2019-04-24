chrome.browserAction.setBadgeText({ text: 'OFF' });

// boolean for on/off 
var enable=false;
// store enable in local storage if you wanted to access in content.js
chrome.storage.sync.set({"enable": enable});