function startTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    let str = `${hours}:${minutes}:${seconds}`;
    let img = strToImg(str);
    document.querySelector('#time').innerHTML = img;
    setTimeout(startTime, 1000);
}

function addZero(i) {
    if(i < 10) {
        i = "0" + i;    
    }
    return i;
}

function strToImg(str) {
    let temp = "";
    for(let i = 0; i < str.length; i++) {
        temp += `<img src='${numImgObj[str[i]]}'/>`
    }
    return temp;
}

startTime();