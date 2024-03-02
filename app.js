const miniMenuOpen = document.querySelector('.bx-menu');
const miniMenuClose =  document.querySelector('.bx-log-out-circle');
const miniSearch = document.querySelector('.search');
const SideBar = document.querySelector('.sidebar');

miniMenuOpen.addEventListener('click', () => {
   SideBar.classList.add('open-nav');
});

miniMenuClose.addEventListener('click', () => {
    SideBar.classList.remove('open-nav');
});

miniSearch.addEventListener('click',() => {
    miniSearch.classList.add('mini-search');
});