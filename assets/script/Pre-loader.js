let num = 2;

let setTime = () =>{
    if (num === 4){
        $('#num-counter').css({fontSize : '0em'});
    }else {
        setTimeout(() => {}, 200);
        $('#num-counter').text(num);
        num++;
    }
}
setInterval(setTime,2000);

$(document).ready(() => {
    setTimeout(() => { //delay time after ready document
        $('.pre-loader').css({
            display : "none"
        });
    },6000);
});
