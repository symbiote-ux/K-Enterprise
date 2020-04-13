const createAddClientBox = () => {
  const addClientBox = document.querySelector('.addClient');
  const name = document.createElement('input');
  const button = document.createElement('button');
  button.innerText = '+';
  button.id = 'add';
  name.id = 'clientName';
  name.placeholder = 'Client Name...';
  addClientBox.appendChild(name);
  addClientBox.appendChild(button);
};

const createClientBox = () => {
  const clientBox = document.querySelector('.clientInfoBox');
  for (let index = 0; index < 10; index++) {
    const box = document.createElement('div');
    box.className = 'clientInfo';
    clientBox.appendChild(box);
  }
};

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
  createClientBox();
  createAddClientBox();
  productDetails();
};

window.onload = main;
