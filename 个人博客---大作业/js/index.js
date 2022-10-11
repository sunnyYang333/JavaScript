for(var i = 0; i < document.querySelectorAll('li').length; i++) {
    console.log(i);
    document.querySelectorAll('li')[i].style.transitionDelay = i * 0.1 + '$';
}