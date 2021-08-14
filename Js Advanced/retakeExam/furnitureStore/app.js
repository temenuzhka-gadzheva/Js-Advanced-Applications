window.addEventListener('load', solve);

function solve() {
    let model = document.querySelector('input[name="model"]');
    let year = document.querySelector('input[name="year"]');
    let description = document.querySelector('#description');
    let price = document.querySelector('input[name="price"]');
    let furnitureList = document.querySelector('#furniture-list');

    let addButton = document.querySelector('#add');


    let trInfo = '';
    let tdModel = '';
    let tdPrice = '';
    let tdButtons = '';
    let moreInfoBtn = '';
    let buyItBtn = '';
    let trHide = ''
    let tdYear = ''
    let tdDescription = ''


    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        let priceValue = Number(price.value);

        if (model.value == '' || year.value < 0 || description.value == '' || price.value < 0) {
            return;
        }

        trInfo = document.createElement('tr');
        trInfo.setAttribute('class', 'info');

        tdModel = document.createElement('td');
        tdModel.textContent = model.value;

        tdPrice = document.createElement('td');
        tdPrice.textContent = priceValue.toFixed(2);

        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);


        tdButtons = document.createElement('td');

        moreInfoBtn = document.createElement('button');
        moreInfoBtn.setAttribute('class', 'moreBtn');
        moreInfoBtn.textContent = `More Info`;
        moreInfoBtn.addEventListener('click', swappingBtnInfoText)

        buyItBtn = document.createElement('button');
        buyItBtn.setAttribute('class', 'buyBtn');
        buyItBtn.textContent = `Buy it`;

        tdButtons.appendChild(moreInfoBtn);
        tdButtons.appendChild(buyItBtn);

        trInfo.appendChild(tdButtons);


        trHide = document.createElement('tr');
        trHide.setAttribute('class', 'hide');


        tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year.value}`;

        tdDescription = document.createElement('td');
        tdDescription.setAttribute('colspan', '3');
        tdDescription.textContent = `Description: ${description.value}`;

        trHide.appendChild(tdYear);
        trHide.appendChild(tdDescription);


        furnitureList.appendChild(trInfo);
        furnitureList.appendChild(trHide);

        function swappingBtnInfoText(e) {
            let button = e.target;
            let hiddenTr = e.target.parentElement.parentElement.nextSibling;
            if (button.textContent == 'Less Info') {
                button.textContent = 'More Info';
                hiddenTr.style.display = 'none'
            } else {

                button.textContent = 'Less Info';
                hiddenTr.style.display = 'contents'
            }

        }

        buyItBtn.addEventListener('click', () => {
            let totalPrice = document.querySelector('.total-price');

            totalPrice.textContent = `${priceValue}.00`;

            furnitureList.innerHTML = '';

        })

        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';

    })
}