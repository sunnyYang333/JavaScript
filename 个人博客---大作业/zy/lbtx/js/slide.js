var innerItems = document.getElementsByClassName("item");
var indicatorsLists = document.getElementsByTagName("li");
var controlLeft = document.getElementsByClassName("left")[0];
var controlRight = document.getElementsByClassName("right")[0];
var current = 0;
innerItems[current].className = "item active";
indicatorsLists[current].className = "active";

function slide() {
    for (var i = 0, len = indicatorsLists.length; i < len; i++) {
        innerItems[i].className = "item";
        indicatorsLists[i].className = "";
        indicatorsLists[i].index = i;
        indicatorsLists[i].onclick = function () {
            if (this.index == current) {
                return false;
            } else {
                current = this.index;
                slide();
            }
        }
    }
    innerItems[current].className = "item active";
    indicatorsLists[current].className = "active";
    console.log(current);
}

controlLeft.onclick = function () {
    current--;
    if (current == -1) {
        current = indicatorsLists.length - 1;
    }
    slide();
}

controlRight.onclick = function () {
    current++;
    if (current == indicatorsLists.length) {
        current = 0;
    }
    slide();
}

var timer = setInterval(controlRight.onclick, 1500);

controlLeft.onmouseover = controlRight.onmouseover = function () {
    clearInterval(timer);
    controlLeft.style.opacity = 1;
    controlRight.style.opacity = 1;

    controlLeft.onmouseover = controlRight.onmouseout = function () {
        timer = setInterval(controlRight.onclick, 3000);
        controlLeft.style.opacity = 0;
        controlRight.style.opacity = 0;
    }
}