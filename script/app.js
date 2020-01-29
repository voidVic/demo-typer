
var b = document.getElementsByTagName('BODY')[0];
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var cheatCode = document.getElementById('cheatCode');
var text2Type = '';
var typeMode = false;
var progress = 0;
var step = 3;
var cursor = '<span class="cursor-blink">|</span>';

function init() {
    document.onkeypress = hType;
}

function goTypeMode () {
    typeMode = true;
    p1.className="hide";
    p2.className="show";
    text2Type = document.getElementById('inputCode').value;
    step = parseInt(document.getElementById('cLevel').value);
}

function hType() {
    progress += step;
    cheatCode.innerHTML = text2Type.substring(0, progress) + cursor;
}

init();