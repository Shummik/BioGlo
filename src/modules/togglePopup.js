const togglePopup = (elem, btn) => {
  const popup = document.querySelector(elem);

  document.body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest(btn)) {
      popup.style.display = 'block';
    } else if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
  });
};

export default togglePopup;