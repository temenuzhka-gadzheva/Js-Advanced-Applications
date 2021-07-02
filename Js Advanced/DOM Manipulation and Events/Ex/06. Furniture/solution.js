function solve() {
  let [generate, buy] = [...document.querySelectorAll('button')];
  let [input, output] = document.querySelectorAll('textarea');
  generate.addEventListener('click', () => {

    let products = JSON.parse(input.value);

    products.forEach(product => {
      let { name, img, price, decFactor } = product;

      let htmlString = `<tr>
  <td><img src=${img}></td>
  <td><p>${name}</p></td>
  <td><p>${price}</p></td>
  <td><p>${decFactor}</p></td>
  <td><input type="checkbox" /></td>
  </tr>`;

      document.querySelectorAll('tbody')[0].insertAdjacentHTML('beforeend', htmlString);
    });
    input.value = '';
  });

  buy.addEventListener('click', () => {
    let [productes, prices, factors] = [[], [], []];
    [...document.querySelectorAll('tbody tr')].forEach(tr => {
      if (tr.querySelectorAll('input')[0].checked) {

        let data = tr.querySelectorAll('p');
        productes.push(data[0].textContent);
        prices.push(Number(data[1].textContent));
        factors.push(Number(data[2].textContent));
      }
    });
    let totalPrice = prices.reduce((sum, num) => sum += num);
    let averageFactor = factors.reduce((sum, num) => sum += num) / factors.length;

    output.textContent = `Bought furniture: ${productes.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageFactor}`;
  });


}

 