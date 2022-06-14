const btnOpen = document.querySelector('.sidebar__burger');
const btnClose = document.querySelector('.sidebar__close');
const sidebar = document.querySelector('.sidebar');

btnOpen.addEventListener('click', () => sidebar.classList.add('sidebar--opened'));

btnClose.addEventListener('click', () => sidebar.classList.remove('sidebar--opened'));