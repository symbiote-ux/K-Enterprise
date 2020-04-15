const createInvoiceBox = transaction => {
  const {
    Price,
    Total_Amount,
    Amount_Paid,
    Amount_Left,
    Time_Stamp
  } = transaction;
  const invoiceBox = document.createElement('div');
  invoiceBox.innerHTML = `
    <div>Price : ${Price}</div>
    <div>Total Amount : ${Total_Amount}</div>
    <div>Amount Paid : ${Amount_Paid}</div>
    <div>Amount Left : ${Amount_Left}</div>
    <div>Date : ${Time_Stamp}</div>`;
  return invoiceBox;
};

const createSizeBox = products => {
  const sizeBox = document.createElement('div');
  products.forEach(product => {
    const box = document.createElement('div');
    box.innerHTML = `
      <div>Size : ${product.Name}</div>
      <div>Weight : ${product.Weight}</div>`;
    sizeBox.appendChild(box);
  });
  return sizeBox;
};

const showTransaction = (transactions, clientId) => {
  const box = document.createElement('div');
  box.className = 'transactionList';
  box.id = `${clientId}-tr`;
  transactions.forEach(transaction => {
    const productBox = document.createElement('div');
    productBox.className = 'product-box';
    const sizeBox = createSizeBox(transaction.Products);
    const invoiceBox = createInvoiceBox(transaction);
    productBox.appendChild(sizeBox);
    productBox.appendChild(invoiceBox);
    box.appendChild(productBox);
  });
  document.body.prepend(box);
};

const createClientInfoHtml = (details, box,client) => {
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
    const boxHtml = createClientInfoHtml(details[client], box,client);
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
