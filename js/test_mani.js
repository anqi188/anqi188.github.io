var btn1 = document.getElementById("btn1");
var btn3 = document.getElementById("btn3");
var img = document.getElementById('img');

var testNum = datajs.length*4;
var device_width = parseFloat(window.screen.width);
var scale;
var arr;

/**
 * the first time of trial
 */
var psdata = []; // record the returned 'id' and 'pstime'
if (localStorage.getItem("flag") === null){
    psdata = JSON.stringify(psdata);
    localStorage.setItem('psdata',psdata);
    localStorage.setItem('flag', 1);
}

/**
 * Web setting 
 */
function setWeb(){
    if(localStorage.getItem("failure_flag") == "0"){
        if(localStorage.getItem("uarr") != null){
            document.getElementById("btn1").innerHTML=">";
            document.getElementById("img").style.visibility = "hidden";

            // arr = localStorage.getItem('uarr').split(",").map(Number)
            arr = JSON.parse(localStorage.getItem("uarr"));
            console.log("setWeb",arr);
            localStorage.setItem('dtkey', arr[0]);

            var num = testNum - arr.length + 1;
            var barpro = num/testNum * 100;
            document.getElementById("mylabel").innerHTML="Trial:"+num+"/"+testNum;
            // document.getElementById("mylabel").innerHTML= barpro.toString() + "%";
            document.getElementById("myBar").style.width = barpro.toString() + "%";

            console.log(datajs);
            var prescr = "dataset_png/" + datajs[arr[0][0]].id + "/" + datajs[arr[0][0]].variants[arr[0][1]].ioi_id + ".png";
            var fullimg = "dataset_png/" + datajs[arr[0][0]].id + "/" + datajs[arr[0][0]].variants[arr[0][1]].img_id + ".png";
            console.log(prescr);
            console.log(fullimg);

            // to calculete the area coord according to the device size
            getImageInfo(fullimg, function (width, height) {
                var img_size_f = width+","+height;
                console.log("img_size_f", img_size_f);
                localStorage.setItem("img_size_f", img_size_f);

                org_width = width;
                console.log("org_width", org_width);
                // device_width = parseFloat(window.screen.width);
                scale = device_width/org_width;
                console.log("scale", scale);


                getImageInfo(prescr, function (width, height) {
                    r_width = width * scale;
                    r_height = height * scale;
                    document.getElementById("img").style.width = r_width + "px";
                    document.getElementById("img").style.height = r_height + "px";
                    img.src = prescr;
                    document.getElementById("img").style.visibility = "visible";
                    document.getElementById("imgload").style.visibility = "hidden";
                })
            })


        } else {
            document.getElementById("imgload").style.visibility = "hidden";
            document.getElementById("progress").style.visibility = "hidden";
            document.getElementById("btlab").style.visibility = "hidden";
            document.getElementById("btn1").style.borderRadius = "0";
            document.getElementById("btn1").style.width = "100%";
            document.getElementById("btn1").style.height = "50px";
            document.getElementById("btn1").style.fontWeight = "normal"
            document.getElementById("btn1").innerHTML="You're done! Export study data please";
            document.getElementById("btnn").style.gridColumn= "1 / 3";
            document.getElementById("img").style.borderWidth="0px";

            img.src = "";
            console.log("csvvvvv");
        }
    } else{
        window.location.href='trial.html';
    }
}

function getImageInfo(url, callback) {
    var img = new Image();
    img.src = url;
    if (img.complete) {
    // 如果图片被缓存，则直接返回缓存数据
        callback(img.width, img.height);
        console.log("555555555555555");
    } else {
        img.onload = function () {
            callback(img.width, img.height);
            console.log("66666666666666");
        }
    }
    // console.log("4444444444444");
}


function clickHandler1(event) {
    if(localStorage.getItem("uarr") != null){
        console.log("arr", arr);
        arr.shift();
        console.log("setUARR",arr);
        // localStorage.setItem('uarr', arr);
        localStorage.setItem('uarr', JSON.stringify(arr));
        if(arr.length == 0){
            localStorage.removeItem('uarr');
        }
        window.location.href='trial.html';
    } else {
        csvStr = JsonToCSV();
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
        hiddenElement.target = '_blank';
        hiddenElement.download = localStorage.getItem('uname')+localStorage.getItem('ufam')+'.csv';
        hiddenElement.click();
    }
}
btn1.onclick = clickHandler1;


/**
 * the psdata from the trial
 */
if (localStorage.getItem("img_id") != null) {

    var deviceWidth     = parseFloat(window.screen.width).toFixed(2);
    var deviceHeight    = parseFloat(window.screen.height).toFixed(2);
    var screenWidth     = parseFloat(window.screen.availWidth).toFixed(2);
    var screenHeight    = parseFloat(window.screen.availHeight).toFixed(2);
    var viewportWidth   = parseFloat($(window).width()).toFixed(2);
    var viewportHeight  = parseFloat($(window).height()).toFixed(2);
    var documentWidth   = parseFloat($(document).width()).toFixed(2);
    var documentHeight   = parseFloat($(document).height()).toFixed(2);
    

    console.log("++++++++@@@@@@@@@@@");
    var img_id = localStorage.getItem('img_id');
    var pstime = localStorage.getItem('pstime');
    console.log('img_id', img_id, 'pstime', pstime);

    var json = {};
    json['img_id']      = localStorage.getItem('img_id');
    //!!!!!!!!!!! to be fixed-img size/coords
    json['img_size']  = localStorage.getItem('img_size');
    json['img_size_s']  = localStorage.getItem('img_size_s');
    json['ioi_id']      = localStorage.getItem('ioi_id');
    json['ioi_coords']  = localStorage.getItem('ioi_coords');
    json['ioi_coords_s']  = localStorage.getItem('ioi_coords_s');
    json['click_coords']    = localStorage.getItem('click_coords');
    //!!!!!!!!!!
    json['result']    = localStorage.getItem('result'); 
    //!!!!!!!!!!! loaded time
    json['time_loaded']   = localStorage.getItem('start');
    json['time_clicked']     = localStorage.getItem('end');
    json['pstime']  = localStorage.getItem('pstime');

    json['device']  = deviceWidth +","+deviceHeight;
    json['screen']  = screenWidth +","+screenHeight;
    json['viewport']  = viewportWidth +","+viewportHeight;
    json['documentt']  = documentWidth +","+documentHeight;
    
    // json['r_coords']    = localStorage.getItem('r_coords');
    

    psdata = JSON.parse(localStorage.getItem('psdata'))
    psdata.push(json);

    psdata = JSON.stringify(psdata);
    localStorage.setItem('psdata',psdata);
}

function JsonToCSV(){
    // JsonFields = ["id", "ioi_coords", "start", "pstime", "end",
    //                 "s_coords",  "r_coords", "failure"];
    JsonFields = ["img_id", "img_size", "img_size_s", 
                    "ioi_id", "ioi_coords", "ioi_coords_s",
                    "click_coords",  "result", "time_loaded",
                    "time_clicked",  "pstime", "device",
                    "screen", "viewport", "documentt"
                ];

    var csvStr = JsonFields.join(",") + "\n";

    psdata = JSON.parse(localStorage.getItem('psdata'))

    psdata.forEach(element => {
        img_id      = element.img_id;
        img_size  = "\""+element.img_size+"\"";
        img_size_s  = "\""+element.img_size_s+"\"";
        ioi_id      = "\""+element.ioi_id+"\"";
        ioi_coords  = "\""+element.ioi_coords+"\"";
        ioi_coords_s    = "\""+element.ioi_coords_s+"\"";
        click_coords    = "\""+element.click_coords+"\"";
        result    = "\""+element.result+"\"";
        time_loaded    = "\""+element.time_loaded+"\"";
        time_clicked     = "\""+element.time_clicked+"\"";
        pstime     = "\""+element.pstime+"\"";
        device     = "\""+element.device+"\"";
        screen     = "\""+element.screen+"\"";
        viewport     = "\""+element.viewport+"\"";
        documentt     = "\""+element.documentt+"\"";

        csvStr += img_id + ',' + img_size + ',' + img_size_s + ',' 
                    + ioi_id + ',' + ioi_coords + ',' + ioi_coords_s 
                    + ',' + click_coords + ',' + result
                    + ',' + time_loaded + ',' + time_clicked
                    + ',' + pstime 
                    + ',' + device + ',' + screen
                    + ',' + viewport + ',' + documentt + "\n";

        })
        return csvStr;
}
