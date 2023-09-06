'use strict';

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var btnCloseModal = document.querySelector('.close-modal');
var btnOpenModal = document.querySelectorAll('.show-modal');

var openModal = function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

var closeModal = function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (var i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});