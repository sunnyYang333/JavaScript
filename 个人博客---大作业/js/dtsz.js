 //函数
 function get(){
    //获取页面img
    var img = document.getElementsByTagName('img');
    //获取时间    
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var secind = date.getSeconds();
    //补0
    if(hour<10){
        hour='0'+hour;
    }else if(minute<0){
        minute='0'+minute;
    }else if (secind) {
        secind='0'+secind;
    }
    //字符串拼接
    img[3].src='images/'+parseInt(hour/10)+'.png';
    img[4].src='images/'+hour%10+'.png';
    img[6].src='images/'+parseInt(minute/10)+'.png';
    img[7].src='images/'+minute%10+'.png';
    img[9].src='images/'+parseInt(secind/10)+'.png';
    img[10].src='images/'+secind%10+'.png';

    }
    get();
    setInterval(get, 1000);   //调用每隔一秒刷新一次 

    var m = 1000;   //闪现间隔---单位毫秒(越小闪现越快)
    function shanxian() {
    var img_=document.getElementById("imgYH");
    var img=document.getElementById("imgYH1");
    img_.style.visibility =(img_.style.visibility == "hidden") ? "visible" : "hidden";
    img.style.visibility =(img.style.visibility == "hidden") ? "visible" : "hidden";
    setTimeout("shanxian()", m);
    }
    
    window.onload = function(){
        shanxian();
    }
