const sendForm = (element) => {
  const errorMessage = 'Что-то пошло не так...',
    loadMesage = 'загрузка',
    successMessage = 'Спасибо! Заявка принята, скоро с Вами свяжутся!';

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem;`;

  element.appendChild(statusMessage);
  
  setTimeout(() => {
    statusMessage.textContent = '';
  }, 5000);

  statusMessage.textContent = loadMesage;
  const formData = new FormData(element);
  
  formData.forEach((val, key) => {
    window.globalObj[key] = val;
  });

  // Fetch 
  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };

  postData(window.globalObj)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200.');
      }
      statusMessage.textContent = successMessage;
      const formInputs = [...document.querySelectorAll('input')];
      formInputs.forEach(item => {
        if (item.value !== '') {
          item.value = '';
        }
      });
      window.globalObj = {}; // очистка объекта
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;
      console.log(error);
    });
};
export default sendForm;