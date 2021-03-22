//on clicked event there are two options
document.addEventListener('DOMContentLoaded', function(){

  //upon begin it calls the content script
  document.getElementById("begin").addEventListener('click', onclickBegin, false)
  function onclickBegin (tab) {
    // chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
    //   chrome.tabs.sendMessage(tabs[0].id, "begin")
    // })
    chrome.runtime.sendMessage("start")
  }

  //upon end it sends an end message to both content and background
  document.getElementById("end").addEventListener('click', onclickEnd, false)
  function onclickEnd () {
    // chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
    //   chrome.tabs.sendMessage(tabs[0].id, "end")
    // })
    chrome.runtime.sendMessage("complete")
  }

}, false)
