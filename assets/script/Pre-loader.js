let num = 2;

let setTime = () =>{
    setTimeout(() => {}, 200);
    $('#num-counter').text(num);
    num++;
}
setInterval(setTime,2000);

$('#num-counter').text()
/*$('#section').css({
    display : "none"
});
$(document).ready(() => {
    setTimeout(() => { //delay time after ready document
        $('.pre-loader').css({
            display : "none"
        });
        $('#section').css({
            display : "block"
        });
    },6000);
});*/
