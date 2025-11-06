// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');
// const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => modal.classList.toggle('is-hidden');

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);

const modal = document.querySelector('.backdrop');
const openButtons  = document.querySelectorAll('.modal-btn-open');
const closeButtons = document.querySelectorAll('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

openButtons.forEach(btn  => btn.addEventListener('click', toggleModal));
closeButtons.forEach(btn => btn.addEventListener('click', toggleModal));

modal.addEventListener('click', e => {
  if (e.target === modal) toggleModal();
});
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('is-hidden') && e.key === 'Escape') toggleModal();
});
