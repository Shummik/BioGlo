const accordion = (elem) => {
  const accordionHeader = document.getElementById(elem),
    accordion = accordionHeader.querySelectorAll('.panel-heading'),
    accordionContent = accordionHeader.querySelectorAll('.collapse'),
    nextBtn = document.querySelectorAll('.next-btn');

  accordionHeader.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.panel-heading');

    if (target) {
      accordion.forEach((item, i) => {
        if (item === target) {
          accordionContent[i].classList.add('in');
        } else {
          accordionContent[i].classList.remove('in');
        }
      });
    }

    let newTarget = event.target;
    newTarget = newTarget.closest('.next-btn');

    if (newTarget) {
      nextBtn.forEach((item, i) => {
        if (item === newTarget) {
          accordionContent[i + 1].classList.add('in');
          accordionContent[i].classList.remove('in');
        }
      });
    }

  });
};

export default accordion;