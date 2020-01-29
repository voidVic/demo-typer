var loadPageButton = document.getElementById('loadPage');

function init() {
    loadPageButton.onclick = openPage;
}
function openPage(){

    var fileUrl = document.getElementById("loadedFile").value;

    var newURL = "https://voidvic.github.io/demo-typer/?filepath=" + fileUrl;
    chrome.tabs.create({ url: newURL });
}

init();
