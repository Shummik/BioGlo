const chooseReg = (element, reg) => {
  const inputs = document.querySelectorAll(element);

  inputs.forEach((item) => {
    item.addEventListener('input', () => {
      let regReplace = reg;
      item.value = item.value.replace(regReplace, '');
    });
  });
};

export default chooseReg;