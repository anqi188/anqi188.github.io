time = Math.round(new Date().getTime());
console.log("time", time);


var area = document.getElementById("area");
var time1;

console.log(datajs);
var scale;

var img = document.getElementById('img');
function waitForImageToLoad(imageElement){
    return new Promise(resolve=>{imageElement.onload = resolve})
}
waitForImageToLoad(img).then(()=>{
    time1 = Math.round(new Date().getTime());
    console.log("time1", time1);
});




window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    time3 = Math.round(new Date().getTime());
    console.log("time3", time3);
});

var imgg = document.querySelector("img")
function loaded() {
    time2 = Math.round(new Date().getTime());
    console.log("time2", time2);
}
if (imgg.complete) {
  loaded()
} else {
  imgg.addEventListener('load', loaded)
  imgg.addEventListener('error', function() {
      alert('error')
  })
}



/**
 * Web setting 
 */
function setWeb(){
    if(localStorage.getItem("test") == "null" ){
        var dtkey = localStorage.getItem('dtkey').split(",").map(Number)
        console.log("dtkey", dtkey);
        // var dtkey = 0;
        // img.src = "dataset_png/" + datajs[dtkey].imgsrc;
        img.src = "dataset_png/" + datajs[dtkey[0]].id + "/" + datajs[dtkey[0]].variants[dtkey[1]].img_id + ".png";

        localStorage.setItem('img_id', datajs[dtkey[0]].variants[dtkey[1]].img_id);
        // localStorage.setItem('img_coords', datajs[dtkey].coords);
        localStorage.setItem('ioi_id', datajs[dtkey[0]].variants[dtkey[1]].ioi_id);
        localStorage.setItem('ioi_coords', datajs[dtkey[0]].variants[dtkey[1]].coords);

        localStorage.setItem('result',0);

        var coords = datajs[dtkey[0]].variants[dtkey[1]].coords.split(",").map(Number);

        var org_width;
        var device_width;

        // to calculete the area coord according to the device size
        getImageInfo(img.src, function (width, height) {
            org_width = width;

            // device_width = parseFloat(window.screen.availWidth);
            // !!!!!!!!!!! the fixed max width - 1200px
            device_width = 1200;
            scale = device_width/org_width;
            
            coords = coords.map(function(element) {
                // return element * scale;
                temp = element * scale
                return parseInt(temp);
            });
            localStorage.setItem('ioi_coords_s', coords);
            coords = coords.toString();
            area.coords = coords;
            console.log("coords", coords);
        })
    } else {
        let coords;
        let org_width;
        let device_width;

        switch(parseInt(localStorage.getItem("test"))) {
            case 0:
                img.src = "dataset_test/" + testdatajs[0].imgsrc;;
                coords = testdatajs[0].coords.split(",").map(Number);
                localStorage.setItem("test", 1);
                break;
            case 1:
                img.src = "dataset_test/" + testdatajs[1].imgsrc;;
                coords = testdatajs[0].coords.split(",").map(Number);
                localStorage.setItem("test", 2);
                break;
            case 2:
                img.src = "dataset_test/" + testdatajs[2].imgsrc;;
                coords = testdatajs[0].coords.split(",").map(Number);
                localStorage.setItem("test", null);
                break;
        }

        getImageInfo(img.src, function (width, height) {
            org_width = width;
            device_width = 1200;
            scale = device_width/org_width;
            
            coords = coords.map(function(element) {
                temp = element * scale
                return parseInt(temp);
            });
            coords = coords.toString();
            area.coords = coords;
            console.log("coords", coords);
        })
    }
}


function getImageInfo(url, callback) {
 
    var img = new Image();
    img.src = url;
    if (img.complete) {
    // 如果图片被缓存，则直接返回缓存数据
        callback(img.width, img.height);
    } else {
        img.onload = function () {
            callback(img.width, img.height);
        }
    }
}



// For correct click
function areaclickHandler(event) {
    var time2 = Math.round(new Date().getTime())
    console.log(time2);

    var usedTime = time2 - time1;
    var leave1 = usedTime % (24 * 3600 * 1000);      
    console.log("interval", leave1);

    //interval storing
    localStorage.setItem('img_size',localStorage.getItem('img_size_f'));
    var img_size_s = img.width + "," + img.height;
    localStorage.setItem('img_size_s', img_size_s);

    localStorage.setItem('result',"correct");
    localStorage.setItem('time_loaded',time1);
    localStorage.setItem('pstime',leave1);
    localStorage.setItem('time_clicked',time2);
    localStorage.setItem('click_coords',event.offsetX+','+event.offsetY);
    // localStorage.setItem('r_coords',event.offsetX/scale+','+event.offsetY/scale);

    console.log(event);
    window.location.href='test.html';
}
area.onclick = areaclickHandler;

// For wrong click
function imgclickHandler(event){
    var time2 = Math.round(new Date().getTime())
    console.log(time2);

    var usedTime = time2 - time1;
    var leave1 = usedTime % (24 * 3600 * 1000);      
    console.log("interval", leave1);

    //interval storing
    localStorage.setItem('img_size',localStorage.getItem('img_size_f'));
    var img_size_s = img.width + "," + img.height;
    localStorage.setItem('img_size_s', img_size_s);

    localStorage.setItem('result',"incorrect");
    localStorage.setItem('time_loaded',time1);
    localStorage.setItem('pstime',leave1);
    localStorage.setItem('time_clicked',time2);
    localStorage.setItem('click_coords',event.offsetX+','+event.offsetY);
    // localStorage.setItem('r_coords',event.offsetX/scale+','+event.offsetY/scale);

    window.location.href='test.html';      
}
img.onclick = imgclickHandler;


function skipTrial(evt){
    evt = (evt) ? evt : window.event
    if (evt.keyCode) {
        if(evt.keyCode == 78){
            var time2 = Math.round(new Date().getTime())
            console.log(time2);

            var usedTime = time2 - time1;
            var leave1 = usedTime % (24 * 3600 * 1000);      
            console.log("interval", leave1);

            localStorage.setItem('img_size',localStorage.getItem('img_size_f'));
            var img_size_s = img.width + "," + img.height;
            localStorage.setItem('img_size_s', img_size_s);

            //interval storing
            localStorage.setItem('result',"skip");
            localStorage.setItem('time_loaded',time1);
            localStorage.setItem('pstime',leave1);
            localStorage.setItem('time_clicked',time2);
            localStorage.setItem('click_coords',"-");
            // localStorage.setItem('r_coords',event.offsetX/scale+','+event.offsetY/scale);

            window.location.href='test.html';   
        }
    }
}
window.document.onkeydown = skipTrial;


// function imgclickHandler(event){
//     console.log(event);
//     var time2 = Math.round(new Date().getTime())

//     var usedTime = time2 - time1;
//     var leave1 = usedTime % (24 * 3600 * 1000);      

//     localStorage.setItem('start',time1);
//     localStorage.setItem('end',time2);
//     localStorage.setItem('pstime',leave1);
//     localStorage.setItem('failure',1); //
//     localStorage.setItem('s_coords',event.offsetX+','+event.offsetY);
//     localStorage.setItem('r_coords',event.offsetX/scale+','+event.offsetY/scale);

//     failrecord();
//     var top = document.documentElement.scrollTop; //垂直方向滚动的值
//     var height = window.screen.availHeight; //屏幕可用工作区高度：

//     document.getElementById('fail').style.height = 500 * scale + "px";
//     document.getElementById('fail').style.visibility = "visible";
//     document.getElementById('fail').style.top = (top+height/2) +"px";


//     setTimeout(() => {
//         document.getElementById('fail').style.visibility = "hidden";
//         time1 = Math.round(new Date().getTime())
//       }, 200)
// }
// img.onclick = imgclickHandler;

// function failrecord(){
//     var json = {};
//     json['id']      = localStorage.getItem('id');
//     json['ioi_coords']  = localStorage.getItem('ioi_coords');
//     json['start']   = localStorage.getItem('start');
//     json['pstime']  = localStorage.getItem('pstime');
//     json['end']     = localStorage.getItem('end');
//     json['s_coords']    = localStorage.getItem('s_coords');
//     json['r_coords']    = localStorage.getItem('r_coords');
//     json['failure']    = localStorage.getItem('failure');


//     psdata = JSON.parse(localStorage.getItem('psdata'))
//     psdata.push(json);

//     psdata = JSON.stringify(psdata);
//     localStorage.setItem('psdata',psdata);
//     console.log("!!!!!!!!!wrong!!!!!!!!!!!!");
// }