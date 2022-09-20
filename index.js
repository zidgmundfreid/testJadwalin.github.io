const switchCheckbox = document.getElementById('switch');
let pricePlans = document.querySelectorAll('.plans-price');

prices = [];

switchCheckbox.addEventListener('click', function () {
  prices = [];

  if (!switchCheckbox.checked) {
    pricePlans.forEach((item, i) => {
      prices = ['19$', '54$', '89$'];
      item.innerText = prices[i];
    });
  } else {
    pricePlans.forEach((item, i) => {
      prices = ['12$', '36$', '56$'];
      item.innerText = prices[i];
    });
  }
});
