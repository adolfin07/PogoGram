

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});
//intersection observer DEFAULT
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

//intersection observer SLOW
const observerSlow = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showSlow');
        } else {
            entry.target.classList.remove('showSlow');
        }
    });
});

const hiddenSlowElements = document.querySelectorAll('.hidden1Slow');
hiddenSlowElements.forEach((el) => observerSlow.observe(el));



//cookies
let cookies = document.getElementById('cookies');

let btnAccept1 = document.getElementById('acept1');
let btnAccept2 = document.getElementById('acept2');
btnAccept1.addEventListener('click', (e) => {

    cookies.style.display = "none";
    console.log("[Cookies]All Acepted(All sessions)");
});

btnAccept2.addEventListener('click', (e) => {

    cookies.style.display = "none";
    console.log("[Cookies]All Acepted(one session)");
});

//extraDropDown Navbar

let dropNav = document.getElementById('dropNav');
let extraList = document.getElementById('extraList');

let arrowDrop = document.getElementById('arrowRight');

dropNav.addEventListener('click', (e) => {

    if (arrowDrop.style.transform == 'rotate(90deg)') {
        arrowDrop.style.transform = 'rotate(0deg)';
    } else {
        arrowDrop.style.transform = 'rotate(90deg)'
    }


    if (extraList.style.display === "block") {
        extraList.style.display = "none";
    } else {
        extraList.style.display = "block";
    }
});



//navDrop

let logoBtn = document.getElementById('logo');
let right = document.getElementById('navRight');

logoBtn.addEventListener('click', (e) => {

    if (right.style.top === '-1000px') {
        right.style.top = '-10px';
    } else {
        right.style.top = '-1000px';
    }

});








//console clear
setTimeout(() => {
    console.clear();
    console.log("console clear");
}, 30000);





