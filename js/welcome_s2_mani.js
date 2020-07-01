var size = datajs.length;
var tmpArr = generateArray(0,size-1);
var dataArr = Array.from(Array(size), () => new Array(2))

localStorage.setItem("arrSize", size);

function generateArray (start, end) {
    return Array.from(new Array(end + 1).keys()).slice(start)
}
 
var len = tmpArr.length;
for(var i=0;i<len;i++) {
    var index = Math.floor(Math.random()*(len-i));
    var tem = tmpArr[index];
    tmpArr[index] = tmpArr[len-i-1];
    tmpArr[len-i-1] = tem;

    dataArr[len-i-1][0] = tem;
    dataArr[len-i-1][1] = Math.floor(Math.random()*4); //randomize one condition
}

var arr = dataArr.slice();
Array.prototype.push.apply(arr, dataArr);
Array.prototype.push.apply(arr, dataArr);
console.log("arr after", arr);


function readradio() {       
    var item = null;
    var obj = document.getElementsByName("Family")
    for (var i = 0; i < obj.length; i++) { //遍历Radio 
        if (obj[i].checked) {
            item = obj[i].value;                   
        }
    }
    // console.log(item);
    return item;
}

function userinfo() {
    if(document.getElementById("name").value.length <= 1){
        alert("Please input your name and select the test group1");
    }
    else{
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var fam = readradio();
        console.log(name, fam);

        localStorage.removeItem('img_id');
        localStorage.removeItem('img_size');
        localStorage.removeItem('img_size_s');
        localStorage.removeItem('ioi_id');
        localStorage.removeItem('ioi_coords');
        localStorage.removeItem('ioi_coords_s');
        localStorage.removeItem('pstime');
        localStorage.removeItem('psdata');
        localStorage.removeItem('flag');
        console.log("psdata cleared");

        localStorage.setItem('uname', name);
        localStorage.setItem('uage', age);
        localStorage.setItem('ufam', fam);
        
        localStorage.setItem('uarr', JSON.stringify(arr));
        
        localStorage.setItem('test', 0);
        localStorage.setItem('webnum', 0);


        window.location.href='quality.html';
    }

}