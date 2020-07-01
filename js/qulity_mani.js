var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var popup = document.getElementById("popup");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");


var num; 
var aqdata = [];
var tmpArr;
var json = {};

function waitForImageToLoad(imageElement){
    return new Promise(resolve=>{imageElement.onload = resolve})
}

function generateArray (start, end) {
    return Array.from(new Array(end + 1).keys()).slice(start)
}

function setWeb(){
    num = parseInt(localStorage.getItem("webnum"));
    if (num == 0){
        aqdata = JSON.stringify(aqdata);
        localStorage.setItem('aqdata',aqdata);
    }

    tmpArr = generateArray(0,3);
    
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
    console.log(datajs[num].id);
    json["img_id"] = datajs[num].id;
    aq1 = document.getElementById("ip1").value;
    aqstorage(tmpArr[0], aq1);
    aq2 = document.getElementById("ip2").value;
    aqstorage(tmpArr[1], aq2);
    aq3 = document.getElementById("ip3").value;
    aqstorage(tmpArr[2], aq3);
    aq4 = document.getElementById("ip4").value;
    aqstorage(tmpArr[3], aq4);

    aqdata = JSON.parse(localStorage.getItem('aqdata'))
    aqdata.push(json);

    aqdata = JSON.stringify(aqdata);
    localStorage.setItem('aqdata',aqdata);

    if(num < datajs.length-1){
        num = num + 1;
        localStorage.setItem("webnum", num);
        location.reload();
    } 
    if(num == datajs.length-1){
        console.log(JSON.parse(localStorage.getItem('aqdata')));
        document.getElementById("wrapper").style.visibility = "hidden";
        document.getElementById("btng2").style.visibility = "visible";
    }
}
btn1.onclick = btn1clickHandler;

function aqstorage(cNum, aq){
    switch(cNum) {
        case 0:
            json["C0"] = aq
            break;
        case 1:
            json["C1"] = aq
            break;
        case 2:
            json["C2"] = aq
            break;
        case 3:
            json["C3"] = aq
            break;
   } 
}

function btn2clickHandler(event) {
    csvStr = JsonToCSV();
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
    hiddenElement.target = '_blank';
    hiddenElement.download = localStorage.getItem('uname')+"_"+localStorage.getItem('uage')+"_"+localStorage.getItem('ufam')+"_"+'S2'+'.csv';
    hiddenElement.click();
}
btn2.onclick = btn2clickHandler;

function JsonToCSV(){
    JsonFields = ["img_id", "C0", "C2", "C3"];

    var csvStr = JsonFields.join(",") + "\n";

    aqdata = JSON.parse(localStorage.getItem('aqdata'))

    aqdata.forEach(element => {
        img_id      = element.img_id;
        C0          = parseInt(element.C0);
        C1          = parseInt(element.C1);
        C2          = parseInt(element.C2);
        C3          = parseInt(element.C3);

        csvStr += img_id + ',' + C0 + ',' + C1 + ',' 
                    + C2 + ',' + C3 + "\n";

        })
        return csvStr;
}


