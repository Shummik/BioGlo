const calcAccordion = () => {
  window.globalObj = {};
  let onOffSwitch = document.getElementById('myonoffswitch'),
      selectBtn = [...document.querySelectorAll('select')],
      onOffSwitchTwo = document.getElementById('myonoffswitch-two');   
  const titleText = document.querySelectorAll('.title-text'),
        calcResult = document.getElementById('calc-result'),
        selectBox = document.querySelectorAll('.select-box'),
        accordion = document.getElementById('accordion');
      calcResult.value = 11000;

const countSum = () => {
  
  onOffSwitch.checked = false; // Первый колодец
  onOffSwitchTwo.checked = false;
  
  let calc = {
    countSeptic: false,
    firstDiametr: 0,
    firstCircles: 1,
    secondDiametr: 0,
    secondCircles: 1,
    circleBottom: false
  };

  const finalSum = (obj) => {
    let total;

    if (obj.countSeptic) {
      total = 10000;
    } else {
      total = 15000;
    }
    if (obj.firstDiametr === 20) {
      total = total + (total * 0.2);
    }
    if (obj.firstCircles === 2) {
      total = total + (total * 0.3);
    }
    if (obj.firstCircles === 3) {
      total = total + (total * 0.5);
    }
    if (obj.circleBottom) {
      total += 2000;
    } else {
      total += 1000;
    }
    calcResult.value = total;
    calc.total = calcResult.value;
  };

  accordion.addEventListener('change', (event) => {
    const target = event.target;

    if (target.closest('#myonoffswitch')) {
      if (onOffSwitch.checked) {
        titleText[1].style.display = 'none';
        selectBox[2].style.display = 'none';
        selectBox[3].style.display = 'none';
        calc.countSeptic = true; // Один септик
        finalSum(calc);
      } else {
        titleText[1].style.display = '';
        selectBox[2].style.display = '';
        selectBox[3].style.display = '';
        calc.countSeptic = false; // Два септика
        finalSum(calc);
      }
    }

    if (target.closest('#myonoffswitch-two')) {
      if (onOffSwitchTwo.checked) {
        calc.circleBottom = true;
        finalSum(calc);
      } else {
        calc.circleBottom = false;
        finalSum(calc);
      }
    }

  });

  for (let i = 0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener('change', () => {
      switch (selectBtn[i].value) {
        case "d0":
          calc.firstDiametr = 0;
        break;
        case "d20":
          calc.firstDiametr = 20;
        break;
        case "d20":
          calc.secondDiametr = 0;
        break;  
        case "d220":
          calc.secondDiametr = 20;
        break;
        case "11":
          calc.firstCircles = 1;
        break;
        case "12":
        calc.firstCircles = 2;
        break;
        case "13":
          calc.firstCircles = 3;
        break;
        case "21":
          calc.secondCircles = 1;
        break;
        case "22":
          calc.secondCircles = 2;
        break;
        case "23":
          calc.secondCircles = 3;
        break;

        default:
          return;
      }
      finalSum(calc);
    });
  }
  const sellBtn = document.querySelector('.sell');
  sellBtn.addEventListener('click', () => {
    window.globalObj = calc;
  });
  
};
countSum();
};

export default calcAccordion;