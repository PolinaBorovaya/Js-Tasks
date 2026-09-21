const table = document.querySelector('table');

table.addEventListener('click', e => {
    const cell = e.target.closest('td');

    if(!cell) {
        return;
    }

    const row = cell.closest('tr');
    row.classList.add('selected');
});