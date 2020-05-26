/**
 * IMPORTANT!!!
 */
var arr = generateArray(0,2)

function generateArray (start, end) {
    return Array.from(new Array(end + 1).keys()).slice(start)
}
 
var len = arr.length;
for(var i=0;i<len;i++) {
    var index = Math.floor(Math.random()*(len-i));
    var tem = arr[index];
    arr[index] = arr[len-i-1];
    arr[len-i-1] = tem;
}
 
console.log(arr);


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
        var fam = readradio();
        console.log(name, fam);

        localStorage.removeItem('img_id');
        localStorage.removeItem('pstime');
        localStorage.removeItem('psdata');
        localStorage.removeItem('flag');
        console.log("psdata cleared");

        localStorage.setItem('uname', name);
        localStorage.setItem('ufam', fam);

        localStorage.setItem('uarr', arr);

        localStorage.setItem('failure_flag',0);

        window.location.href='test.html';
    }

}