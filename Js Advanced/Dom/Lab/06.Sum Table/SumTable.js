function sumTable() {

let allPrices = [...document.querySelectorAll('table tr')]
.slice(1,-1)
.map(s => s.children[1].textContent);


let result= allPrices.reduce((acc,sum) => acc + Number(sum),0);
let output = document.getElementById('sum').textContent = result;

}


