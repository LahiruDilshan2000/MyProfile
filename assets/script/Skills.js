const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('bar');
        } else {
            entry.target.classList.remove('bar');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden-bar');

hiddenElement.forEach((el) => observer.observe(el));