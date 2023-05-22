const card = document.querySelector('.p-c-container');

card.addEventListener('mousemove', () => {
    card.classList.add('move');
});
card.addEventListener('mouseleave', () => {
    card.classList.remove('move');
});

///////////////////////

const card2 = document.querySelector('.p2-c-container');

card2.addEventListener('mousemove', () => {
    card2.classList.add('move');
});
card2.addEventListener('mouseleave', () => {
    card2.classList.remove('move');
});

////////////////////

const card3 = document.querySelector('.p3-c-container');

card3.addEventListener('mousemove', () => {
    card3.classList.add('move');
});
card3.addEventListener('mouseleave', () => {
    card3.classList.remove('move');

});

//////////////////////////////////////////////
(function () {
    var rotate;

    rotate = function () {
        return $('.p-card:first-child').fadeOut(400, 'swing', function () {
            return $('.p-card:first-child').appendTo('.p-c-container').hide();
        }).fadeIn(400, 'swing');
    };
    $('.p-card-next').click(function () {
        return rotate();
    })
}).call(this);
//////////////////
(function () {
    var rotate2;

    rotate2 = function () {
        return $('.p2-card:first-child').fadeOut(400, 'swing', function () {
            return $('.p2-card:first-child').appendTo('.p2-c-container').hide();
        }).fadeIn(400, 'swing');
    };
    $('.p2-card-next').click(function () {
        return rotate2();
    })
}).call(this);
/////////////////
(function () {
    var rotate3;

    rotate3 = function () {
        return $('.p3-card:first-child').fadeOut(400, 'swing', function () {
            return $('.p3-card:first-child').appendTo('.p3-c-container').hide();
        }).fadeIn(400, 'swing');
    };
    $('.p3-card-next').click(function () {
        return rotate3();
    })
}).call(this);