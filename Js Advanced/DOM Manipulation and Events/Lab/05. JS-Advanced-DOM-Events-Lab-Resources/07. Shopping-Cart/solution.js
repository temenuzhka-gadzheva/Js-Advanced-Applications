function solve() {

   let addProductButtons = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('textarea');
   let checkOutButtonEl = document.querySelector('.checkout');
   let totalPrice = 0;
   let products = [];
   for (const addProductButton of addProductButtons) {
    
      addProductButton.addEventListener('click', (e) => {
         
         let currentProductEl = e.currentTarget.parentElement.parentElement;
         let productName = currentProductEl.querySelector('.product-title').textContent;
         let productPrice = currentProductEl.querySelector('.product-line-price').textContent;
         productPrice = Number(productPrice);
        
         totalPrice += productPrice;
         products.push(productName);

         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      });
   }

   checkOutButtonEl.addEventListener('click', () => {
     let uniqueProducts = products.reduce((acc,b) =>{
     if (!acc.includes(b)) {
        acc.push(b);
     }
     return acc;
     }, []);
      textAreaElement.textContent += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
   });
}