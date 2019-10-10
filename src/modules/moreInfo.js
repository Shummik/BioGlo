const moreInfo = () => {
  const addSentenceBtn = document.querySelector('.add-sentence-btn'),
        sentenses = [...document.querySelectorAll('.col-xs-12.col-sm-6.col-md-4')];
  
  addSentenceBtn.addEventListener('click', () => {
    sentenses.forEach((item) => {
      item.classList.remove('hidden');
      addSentenceBtn.style.display = 'none';
    });
  });
};

export default moreInfo;