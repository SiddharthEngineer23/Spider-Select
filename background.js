chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(tab.id, { file: "combined.css" });
  chrome.tabs.executeScript(tab.id, { file: "combined.js" });
});


chrome.runtime.onMessage.addListener(function(request){
  const div = document.createElement('div')
  div.textContent = `${request.url}: ${request.cssVal}`
  document.body.appendChild(div)

  // should get something close to this from the content.js
  // chrome.runtime.sendMessage({
  //   url: window.location.href,
  //   count: matches.length
  // })
})
