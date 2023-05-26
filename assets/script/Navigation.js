window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

/*var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px";
    } else {
        if(scrollTop < lastScrollTop){
            navbar.style.top = "-60px";
        }
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop;
})*/
function toggle() {
    const sec = document.getElementById('section');
    const head = document.getElementById('header');
    const nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    head.classList.toggle('active');
    nav.classList.toggle('active');
}