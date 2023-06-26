/*

const point = {x : 0, y : 0}
const circles =  document.querySelectorAll(".cursor-circle");

circles.forEach(function (circle){
    circle.x = 0;
    circle.y = 0;
});

$(window).on('mousemove', (event) => {
    point.x = event.clientX;
    point.y = event.clientY;

    console.log(point)

});

let animateCircles = () => {

    let x = point.x;
    let y = point.y;

    circles.forEach(function (circle, index){
        circle.style.left = x - 10 + 'px';
        circle.style.top = y - 8 + 'px';

        circle.style.scale = (circles.length - index) / 20;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

    });
    requestAnimationFrame(animateCircles);
}

animateCircles();*/
