var smartPhones=['iphone','ipad','windows ce','android','blackberry','nokia','webos','opera','opera mini','sonyericsson','opera mobi','iemobile'];
for(var i in smartPhones){
    //스마트폰 확인
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
        document.location='http://ehdwls1377.dothome.co.kr/mobile.html';
    }
}