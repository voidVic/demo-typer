chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://voidvic.github.io/demo-typer/";
    chrome.tabs.create({ url: newURL });
});

function openPage(){
  var newURL = "https://voidvic.github.io/demo-typer/";
  chrome.tabs.create({ url: newURL });
}
