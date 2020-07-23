const createProductBox = () => {
  const productList = [ 'Size_1', 'Size_2', 'Size_3', 'Size_4', 'Size_5', 'Size_6' ];
  const productBox = document.querySelector('.productBox');
  productList.forEach(product => {
    const box = document.createElement('div');
    box.className = 'productInfo';
    box.id = product;
    productBox.appendChild(box);
  });
};

const main = () => {
  createProductBox();
  productDetails();
  clientsDetails();
};

window.onload = main;
