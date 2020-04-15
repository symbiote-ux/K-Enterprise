const showClientDetails = details => {
  const clientBox = document.querySelector('.clientInfoBox');
  for (const client in details) {
    const { Personal_Details, Total_Amount_Due } = details[client];
    const { Shop_Name, Address, Contact_No } = Personal_Details;
    const box = document.createElement('div');
    box.className = 'clientInfo';
    box.id = client;
    box.innerHTML = `
    <div class="heading">
     <div class="client-name">${client}</div>
     <div class="amount-due">Amount-Left : ${Total_Amount_Due}</div>
     <div class="expand">
     <img src="../images/arrow.png" height="45px" width="45px" onclick="getTransactions('${client}')">
     </div>
    </div>
    <div class="address">${Shop_Name}, ${Address}, ${Contact_No}</div>`;
    clientBox.appendChild(box);
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

const showTransaction = (transactions, clientId) => {
  console.log(clientId);
  const box = document.createElement('div');
  box.className = 'transactionList';
  box.id = `${clientId}-tr`;
  document.querySelector('.screen').appendChild(box);
};
