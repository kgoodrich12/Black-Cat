//boton del navegador//

const trigger = document.querySelector('.trigger');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');

trigger.addEventListener('click', () => nav.classList.add('open-nav'));
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));



//transicion entre paginas//

const transition = document.querySelector('.transition');
const link = document.querySelector('.link');

link.addEventListener('click', e => {
    e.preventDefault();
    transition.classList.remove('d-none');
    setTimeout(() => {
        window.location.href = link.getAttribute('href');
    }, 1000);
}); 
