var check = document.getElementsByClassName("check");
var check1 = document.getElementsByClassName("check1");
var sl_min = document.getElementsByClassName("sl_min");
var sl_max = document.getElementsByClassName("sl_max");
var sl_min_max = document.getElementsByClassName("sl_min_max");
var price = document.getElementsByClassName("price");
var xiaoji = document.getElementsByClassName("xiaoji");
var allprice = document.getElementsByClassName("total")[0];
var numb = document.getElementsByClassName("numb")[0];
var count=0;
//商品信息前复选框的事件
for(var i=0;i<check1.length;i++){
    check1[i].onclick=function(){
        if(this.checked){
            count++;
        }
        else{
            count--;
        }
        if(count==check1.length){
            check[0].checked=true;
            check[1].checked=true;
        }
        else{
            check[0].checked=false;
            check[1].checked=false;
        }
        ischoose();
    }
}
//全选复选框的事件
for (key in check) {
    check[key].index = key;  //给index属性上绑值，绑个索引
    check[key].onclick = function () {
        check[this.index == 0 ? 1 : 0].checked = !check[this.index == 0 ? 1 : 0].checked;
        if(this.checked){
            for (var i = 0; i < check1.length; i++) {
                check1[i].checked = true;
            }
        }
        else{
            for (var i = 0; i < check1.length; i++) {
                check1[i].checked = false;
            }
        }
        ischoose();
    }
}
//购物车数量的增减事件
for (var i = 0; i < sl_min.length; i++) {
    sl_min[i].index = i;
    sl_min[i].onclick = function () {
        var val = sl_min_max[this.index].value;
        val--;
        if (val < 1) {
            val = 1;
        }
        sl_min_max[this.index].value = val;
        addprice(this.index,val);
        ischoose();
    }
    sl_max[i].index=i;
    sl_max[i].onclick = function () {
        var val=sl_min_max[this.index].value;
        val++;
        sl_min_max[this.index].value=val;
        addprice(this.index,val);
        ischoose();
    }
}
//金额的计算方法
function addprice(index,value){
    xiaoji[index].innerHTML="￥"+(price[index].getAttribute("data-price")*value).toFixed(2);
    xiaoji[index].setAttribute("data-xiaoji",(price[index].getAttribute("data-price")*value).toFixed(2));
}
//判断商品信息前的复选框是否打勾
function ischoose(){
    var total=0;
    var num=0;
    for(var i=0;i<check1.length;i++){
        if(check1[i].checked){
            total+=parseFloat(xiaoji[i].getAttribute("data-xiaoji"));
            num+=parseInt(sl_min_max[i].value);
        }
    }
    allprice.innerHTML="￥"+total.toFixed(2);
    numb.innerHTML=num;
}


document.getElementById("btn").onclick = function() {
    var div = document.getElementById("dv");
    var pObjs = div.childNodes;
    for (var i = pObjs.length - 1; i >= 0; i--) {
        div.removeChild(pObjs[i]);
    }
}