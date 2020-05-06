var img = document.getElementById('img');
var area = document.getElementById("area");
var time1 = Math.round(new Date().getTime());
console.log(datajs);
var scale;

/**
 * Web setting 
 */
function setWeb(){
    var dtkey = parseInt(localStorage.getItem('dtkey'));
    // var dtkey = 0;
    img.src = "dataset-png/" + datajs[dtkey].imgsrc;

    localStorage.setItem('id', datajs[dtkey].name);
    localStorage.setItem('ioi_coords', datajs[dtkey].coords);

    localStorage.setItem('failure',0);

    var coords = datajs[dtkey].coords.split(",").map(Number);
    console.log(datajs[dtkey].coords);
    var org_width;
    var device_width;

    // to calculete the area coord according to the device size
    getImageInfo(img.src, function (width, height) {
            org_width = width;
            device_width = parseFloat(window.screen.width);
            scale = device_width/org_width;
            console.log(width);
            coords = coords.map(function(element) {
                return element * scale;
            });
            coords = coords.toString();
            area.coords = coords;
            console.log(coords);
        })
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


/**
 * PSTime logging 
 */
// For correct click
function areaclickHandler(event) {
    var time2 = Math.round(new Date().getTime())
    console.log(time2);

    var usedTime = time2 - time1;
    var leave1 = usedTime % (24 * 3600 * 1000);      
    console.log("interval", leave1);

    //interval storing
    localStorage.setItem('failure',0);
    localStorage.setItem('start',time1);
    localStorage.setItem('pstime',leave1);
    localStorage.setItem('end',time2);
    localStorage.setItem('s_coords',event.offsetX+','+event.offsetY);
    localStorage.setItem('r_coords',event.offsetX/scale+','+event.offsetY/scale);

    window.location.href='test.html';
}
area.onclick = areaclickHandler;

// For wrong click
function imgclickHandler(event){
    console.log(event);
    var time2 = Math.round(new Date().getTime())

    var usedTime = time2 - time1;
    var leave1 = usedTime % (24 * 3600 * 1000);      

    localStorage.setItem('start',time1);
    localStorage.setItem('end',time2);
    localStorage.setItem('pstime',leave1);
    localStorage.setItem('failure',1); //
    localStorage.setItem('s_coords',event.offsetX+','+event.offsetY);
    localStorage.setItem('r_coords',event.offsetX/scale+','+event.offsetY/scale);

    failrecord();
    var top = document.documentElement.scrollTop; //垂直方向滚动的值
    var height = window.screen.availHeight; //屏幕可用工作区高度：

    document.getElementById('fail').style.height = 500 * scale + "px";
    document.getElementById('fail').style.visibility = "visible";
    document.getElementById('fail').style.top = (top+height/2) +"px";


    setTimeout(() => {
        document.getElementById('fail').style.visibility = "hidden";
        time1 = Math.round(new Date().getTime())
      }, 200)
}
img.onclick = imgclickHandler;

function failrecord(){
    var json = {};
    json['id']      = localStorage.getItem('id');
    json['ioi_coords']  = localStorage.getItem('ioi_coords');
    json['start']   = localStorage.getItem('start');
    json['pstime']  = localStorage.getItem('pstime');
    json['end']     = localStorage.getItem('end');
    json['s_coords']    = localStorage.getItem('s_coords');
    json['r_coords']    = localStorage.getItem('r_coords');
    json['failure']    = localStorage.getItem('failure');


    psdata = JSON.parse(localStorage.getItem('psdata'))
    psdata.push(json);

    psdata = JSON.stringify(psdata);
    localStorage.setItem('psdata',psdata);
    console.log("!!!!!!!!!wrong!!!!!!!!!!!!");
}