const removeTransaction = boxId => {
  document.querySelector('#box').style.opacity = 1;
  document.querySelector(`#${boxId}`).remove();
};

const createInvoiceBox = transaction => {
  const invoiceBox = document.createElement('div');
  invoiceBox.className = 'invoice-box';
  invoiceBox.innerHTML = `
    <div class="payment">Price : ${transaction.Price}</div>
    <div class="payment" style="background: skyblue;">Total Amount : ${transaction.Total_Amount}</div>
    <div class="payment" style="background:rgb(0, 128, 0,0.8)">Amount Paid : ${transaction.Amount_Paid}</div>
    <div class="payment" style="background:rgba(220, 20, 60, 0.8);">Amount Left : ${transaction.Amount_Left}</div>
    <div class="payment" style="display:flex;">
    <div class="date">
    Date : ${transaction.Time_Stamp}
    </div>
    <div class="print">
    <img src="../images/print.png">
    </div>
    </div>`;
  return invoiceBox;
};

const createSizeBox = products => {
  const sizeBox = document.createElement('div');
  sizeBox.className = 'size-box';
  products.forEach(product => {
    const box = document.createElement('div');
    box.className = 'name-weight';
    box.innerHTML = `
      <div class="size">Size : ${product.Name}</div>
      <div class="size">Weight : ${product.Weight}</div>`;
    sizeBox.appendChild(box);
  });
  return sizeBox;
};

const getProductBox = transaction => {
  const productBox = document.createElement('div');
  productBox.className = 'product-box';
  const sizeBox = createSizeBox(transaction.Products);
  const invoiceBox = createInvoiceBox(transaction);
  productBox.appendChild(sizeBox);
  productBox.appendChild(invoiceBox);
  return productBox;
};

const showTransaction = (transactions, clientId) => {
  document.querySelector('#box').style.opacity = 0.1;
  const box = document.createElement('div');
  box.className = 'transactionList';
  box.id = `${clientId}-tr`;
  const heading = document.createElement('div');
  heading.className = 'tr-title';
  heading.innerHTML = `Client Name : ${clientId}<span onclick="removeTransaction('${clientId}-tr')">
  <img src="../images/cross.png" class="hide">
  <span>`;
  box.appendChild(heading);
  const transactionList = document.createElement('div');
  transactionList.className = 'transactions';
  transactions.forEach(transaction => {
    const productBox = getProductBox(transaction);
    transactionList.appendChild(productBox);
  });
  box.appendChild(transactionList);
  document.body.prepend(box);
};

const createClientInfoHtml = (details, box, client) => {
  const { Personal_Details, Total_Amount_Due } = details;
  const { Shop_Name, Address, Contact_No } = Personal_Details;
  box.innerHTML = `
    <div class="heading">
     <div class="client-name">${client}</div>
     <div class="amount-due">Amount-Left : ${Total_Amount_Due}</div>
     <div class="expand">
     <img src="../images/arrow.png" height="45px" width="45px" onclick="getTransactions('${client}')">
     </div>
    </div>
    <div class="address">${Shop_Name}, ${Address}, ${Contact_No}</div>`;
  return box;
};

const showClientDetails = details => {
  const clientBox = document.querySelector('.clientInfoBox');
  for (const client in details) {
    const box = document.createElement('div');
    box.className = 'clientInfo';
    box.id = client;
    const boxHtml = createClientInfoHtml(details[client], box, client);
    clientBox.appendChild(boxHtml);
  }
};

const showProductDetails = details => {
  for (const product in details) {
    const infoBox = document.querySelector(`#${product}`);
    for (const key in details[product]) {
      const box = document.createElement('div');
      box.innerHTML = `<div class="name">${key}</div> 
      <input class="value" value="${details[product][key]}" onchange="saveValue(event)"/>`;
      box.className = 'unit';
      infoBox.appendChild(box);
    }
  }
};
