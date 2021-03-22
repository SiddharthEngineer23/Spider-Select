//variable saving actions on each individual url
window.list = {}

//will receive either message from popup or data from content
chrome.runtime.onMessage.addListener(function (request){

  if(request == "start"){
    alert("began successfully")
    function(tab){
      chrome.tabs.insertCSS(tab.id, { file: "combined.css" });
      chrome.tabs.executeScript(tab.id, { file: "combined.js" });
    };
  } else if(request == "complete"){
    alert("ended successfully")
    chrome.tabs.removeCSS();
    //edit above and complete

    Object.keys(window.list).forEach(function (url) {
      const div = document.createElement('div')
      div.textContent = `${url}: ${window.list[url]}`
      document.body.appendChild(div)
    })
  } else {
    window.list[request.url] = request.cssVal
  }
})
