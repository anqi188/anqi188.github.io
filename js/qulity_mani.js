var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var popup = document.getElementById("popup");
var btn1 = document.getElementById("btn1");

var num; 

function waitForImageToLoad(imageElement){
    return new Promise(resolve=>{imageElement.onload = resolve})
}

function generateArray (start, end) {
    return Array.from(new Array(end + 1).keys()).slice(start)
}

function setWeb(){
    num = parseInt(localStorage.getItem("webnum"));

    var tmpArr = generateArray(0,3);
    
    var len = tmpArr.length;
    for(var i=0;i<len;i++) {
        var index = Math.floor(Math.random()*(len-i));
        var tem = tmpArr[index];
        tmpArr[index] = tmpArr[len-i-1];
        tmpArr[len-i-1] = tem;

    }
    console.log(tmpArr);



    img1.src = "dataset_png/" + datajs[num].id + "/" + datajs[num].variants[tmpArr[0]].img_id + ".png";
    img2.src = "dataset_png/" + datajs[num].id + "/" + datajs[num].variants[tmpArr[1]].img_id + ".png";
    img3.src = "dataset_png/" + datajs[num].id + "/" + datajs[num].variants[tmpArr[2]].img_id + ".png";
    img4.src = "dataset_png/" + datajs[num].id + "/" + datajs[num].variants[tmpArr[3]].img_id + ".png";


    waitForImageToLoad(img1).then(()=>{
        document.getElementById("onload1").style.visibility = "hidden";
    });
    waitForImageToLoad(img2).then(()=>{
        document.getElementById("onload2").style.visibility = "hidden";
    });
    waitForImageToLoad(img3).then(()=>{
        document.getElementById("onload3").style.visibility = "hidden";
    });
    waitForImageToLoad(img4).then(()=>{
        document.getElementById("onload4").style.visibility = "hidden";
    });
}

function imgclickHandler1(event){
    document.getElementById("btnn").style.visibility = "hidden";
    document.getElementById("popup").style.zIndex = 4;
    document.getElementById("popupimg").src = img1.src;
}
img1.onclick = imgclickHandler1;
function imgclickHandler2(event){
    document.getElementById("btnn").style.visibility = "hidden";
    document.getElementById("popup").style.zIndex = 4;
    document.getElementById("popupimg").src = img2.src;
}
img2.onclick = imgclickHandler2;
function imgclickHandler3(event){
    document.getElementById("btnn").style.visibility = "hidden";
    document.getElementById("popup").style.zIndex = 4;
    document.getElementById("popupimg").src = img3.src;
}
img3.onclick = imgclickHandler3;
function imgclickHandler4(event){
    document.getElementById("btnn").style.visibility = "hidden";
    document.getElementById("popup").style.zIndex = 4;
    document.getElementById("popupimg").src = img4.src;
}
img4.onclick = imgclickHandler4;

function imgpopclickHandler(event){
    document.getElementById("btnn").style.visibility = "visible";
    document.getElementById("popup").style.zIndex = -1;
    document.getElementById("popupimg").src = "";

}
popup.onclick = imgpopclickHandler;

function btn1clickHandler(event){
    num = num + 1;
    localStorage.setItem("webnum", num);
    location.reload();

}
btn1.onclick = btn1clickHandler;
