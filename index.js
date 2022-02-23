function clock(){
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    let elmnt2 = document.getElementById("formatTime");
    let s = checktime(seconds);
    let p = timePeriod(hours);

    let elmnt = document.getElementById("clock");
    elmnt.textContent = ("0" + hours).substr(-2) + " : " + ("0" + minutes).substr(-2) + " : " + s;
    let elmnt1 = document.getElementById("periode");
    elmnt1.textContent = p;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let d = time.getDay();
    let m = time.getMonth();
    // get region
    let getRegion = time.toString().split(' ');
    let region = `${getRegion[6].replace("(","")} ${getRegion[7]} ${getRegion[8].replace(")", "")}`;


    document.getElementById("region").innerText = region;
    elmnt2.textContent = `${getRegion[2]} ( ${day[d]} ) / ${months[m]} / ${time.getFullYear()}`;
}
function checktime(i){
    if(i < 10){
        i = "0" + i;
    }
    return i
}

function timePeriod(x){
    if (x < 11){
        x = "am";
    }else{
        x = "pm";
    }
    return x;
}
setInterval(clock, 1000);
