const header = document.querySelector('header');
/* 
const viewTransition = document.getElementById('view-transition'); */
const btnHome = document.getElementById('btn-home');
const btnProjects = document.getElementById('btn-projects');
const btnCv = document.getElementById('btn-cv');

const toggleMenuContnair = document.querySelector('.toggle-menu-contnair');
const toggleMenu = document.querySelector('.toggle-menu');
const viewTitle = {
    ".home": "Présentation",
    '.projects': 'Projets',
    ".cv": "Cv"
}

let display = "";

window.onload = init;

function init() {
    /* 
        viewTransition.style.height = '100vh';
        viewTransition.style.width = '100vw'; */
    const introMessage = document.createElement('div');
    introMessage.classList.add('intro-message');
    const message = 'Bienvenu_Chez_Merdi_Akelax !';
    for (lettle of message) {
        lettleSpan = document.createElement('div');
        lettleSpan.classList.add('anime-lettle');
        lettleSpan.textContent = lettle;
        introMessage.appendChild(lettleSpan);
    }
    /* 
        viewTransition.appendChild(introMessage); */

    transiteView(".home", '0', 1, 'in', 2);
    transiteView(".projects", 0, 0.3, 'out', 0.1);
    transiteView(".cv", '33%', 0.3, 'out', 0);
    seeView(btnHome, ".home");
    seeView(btnProjects, ".projects");
    seeView(btnCv, ".cv");
    /*     anime({
            targets: '.anime-lettle',
            translateY: 300,
            delay: function(el, i, l) {
                return i * 15;
            },
            endDelay: function(el, i, l) {
                return (l - i) * 200;
            }
        }); */
    /*    anime({
           targets: '#view-transition',
           translateY: {
               value: 1500,
               duration: 2000,
               easing: 'easeInOutQuart'
           },
           delay: 2500 // All properties except 'scale' inherit 250ms delay
       }); */
    nextView()

}

function nextView() {
    btnNextView = document.getElementsByClassName('btn-next-view');
    btnNextView[0].addEventListener('click', () => {
        transiteView(".home", '-33%', 0.25, 'out', 700);
        transiteView(".projects", 0, 1, 'in', 1700);
    })
    btnNextView[1].addEventListener('click', () => {
        transiteView(".projects", 0, 0.25, 'out', 700);
        transiteView(".cv", '0', 1, 'in', 1700);
    })
    btnNextView[2].addEventListener('click', () => {
        transiteView(".home", '-33%', 0.25);
        transiteView(".projects", 0, 0.25);
        transiteView(".cv", '33%', 0.25);
    })
}

function transiteView(v, x, s, direction = 'out', time = 1500) {
    anime({
        targets: v,
        translateX: {
            value: x,
            duration: time,
            delay: 0,
            easing: 'easeInOutQuart'
        },
        easing: 'linear',
        scale: {
            value: s,
            duration: time,
            delay: 0,
            easing: 'easeInOutQuart'
        },
        delay: 250, // All properties except 'scale' inherit 250ms delay
        complete: function(anim) {
            let view = document.querySelector(v);
            if (anim.completed) {
                if (direction == 'in') {
                    document.body.style.display = 'block';
                    toggleMenuContnair.classList.replace("toggle-menu-hidden", "toggle-menu-visible");
                    view.classList.replace("section-hidden", "section-visible");
                    document.querySelector('.view-title').textContent = viewTitle[v];
                }
                if (direction == 'out') {
                    view.classList.replace("section-visible", "section-hidden");

                }
                /* 
                                view.addEventListener('mouseenter', () => {
                                    if (view.classList.contains('section-hidden')) {
                                        transiteView(v, x, 0.4, 'out', 500);
                                    }
                                })
                                view.addEventListener('mouseout', () => {
                                    if (view.classList.contains('section-hidden')) {
                                        transiteView(v, x, 0.3, 'out', 500);
                                    }
                                }) */
                const cursorCircle = cursor.querySelector('.cursor__circle');
                if (toggleMenuContnair.classList.contains('toggle-menu-hidden')) {
                    cursorCircle.classList.replace('cursor__circle__hidden', 'cursor__circle__visible');
                } else {
                    cursorCircle.classList.replace('cursor__circle__visible', 'cursor__circle__hidden');
                }
            }
        }
    });
}

function seeView(btn, view) {
    btn.addEventListener('click', () => {
        document.querySelector(view).classList.replace("section-hidden", "section-visible");
        display = view;
        /* 
                header.className = 'header-hidden'; */
        transiteView(view, '0', 1, 'in')
    });
}

toggleMenu.addEventListener('click', () => {
    toggleMenuContnair.classList.replace("toggle-menu-visible", "toggle-menu-hidden");
    transiteView(".home", '-33%', 0.25);
    transiteView(".projects", 0, 0.25);
    transiteView(".cv", '33%', 0.25);
});

function parallaxMouse() {
    var scene = document.getElementById('parallax');
    var parallax = new Parallax(scene);
};
parallaxMouse();