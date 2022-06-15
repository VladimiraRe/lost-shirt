const filter = document.querySelector('.filter');
const filterItems = filter.querySelectorAll('.filter__link');
const active = 'filter__link--active';

filter.addEventListener('click', function(event) {
    event.preventDefault();
    
    filterItems.forEach(i => i.classList.remove(active));

    event.target.classList.add(active);
})