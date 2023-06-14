let num = 2;

let setTime = () =>{

    setTimeout(() => {}, 200);
    $('#num-counter').text(num);
    num++;
}
setInterval(setTime,2000);

$(document).ready(() => {
    setTimeout(() => { //delay time after ready document
        $('.pre-loader').css({
            display : "none"
        });
    },6000);
});
