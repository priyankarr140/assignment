function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function date()
{
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    document.getElementById("demo").innerHTML = newdate;
}
var url = "http://www.espncricinfo.com/rss/content/feeds/news/8.xml"; //feed url
var xhr = createCORSRequest("GET","https://api.rss2json.com/v1/api.json?rss_url="+url);
if (!xhr) {
  throw new Error('CORS not supported');
} else {
    xhr.send();
}
xhr.onreadystatechange = function() {
    if (xhr.readyState==4 && xhr.status==200) {
        var responseText = xhr.responseText;
        var result = JSON.parse(responseText);
        console.log(result);
    }
}
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}