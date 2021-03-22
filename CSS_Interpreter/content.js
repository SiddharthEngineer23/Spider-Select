//listening for messages from popup (begin/end)
chrome.runtime.onMessage.addListener(function (request) {

  //upon begin it counts number of bears (switch to record css)
  if(request == "begin"){
    alert("Use the mouse to click on elements and create your CSS selector path." + "\r\n" + "Note that this extension will not work in incognito windows.")

    chrome.tabs.onActivated.addListener(editHTML)

    const re = new RegExp('bear', 'gi')
    const matches = document.documentElement.innerHTML.match(re)

    chrome.runtime.sendMessage({
      url: window.location.href,
      count: matches.length
    })
  }
  //upon  end it terminates and sends  a message
  else if(request == "end"){

    alert("Your CSS Interpreter data has been recorded successfully.")

  }
})

function editHTML (){
  //checks if it has onclick event already
  if(true){
    chrome.tabs.insertCSS
  }
}
