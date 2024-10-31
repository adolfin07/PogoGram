

//intersection observer
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });

});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));

//cookies
let cookies = document.getElementById('cookies');

let btnAccept1 = document.getElementById('acept1');
let btnAccept2 = document.getElementById('acept2');
btnAccept1.addEventListener('click', (e) => {

    cookies.style.display = "none";
});

btnAccept2.addEventListener('click', (e) => {

    cookies.style.display = "none";
});

//extraDropDown Navbar

let dropNav = document.getElementById('dropNav');
let extraList = document.getElementById('extraList');

dropNav.addEventListener('click', (e) => {
    if (extraList.style.display === "block") {
        extraList.style.display = "none";
    } else {
        extraList.style.display = "block";
    }
});
