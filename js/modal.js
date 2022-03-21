const modalButtons = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.overlay');
const modalClose = modal.querySelector('.modal__close');
//вызов модального окна
modalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
});
//закрытие модального окна
overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
})

modalClose.addEventListener('click', () => {
    modal.classList.add('hidden')
})