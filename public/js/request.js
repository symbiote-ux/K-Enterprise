const getTransactions = clientId => {
  fetch('/transactions', {
    method:'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({clientId})
  }).then(res => res.json())
  .then(transactions => showTransactions(transactions,clientId));
};

const clientsDetails = () => {
  fetch('/clientsDetail')
    .then(res => res.json())
    .then(details => showClientDetails(details));
};

const saveValue = e => {
  const value = e.target.value;
  const boxId = e.target.parentElement.parentElement.id;
  const id = event.target.parentElement.querySelector('div').innerText;
  fetch('/saveValue', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value, id, boxId })
  }).then(() => {});
};

const productDetails = () => {
  fetch('/productDetails')
    .then(res => res.json())
    .then(details => showProductDetails(details));
};

const clientsDetail = () => {
  fetch('/clientsDetail')
    .then(res => res.json())
    .then(details => showClientDetails(details));
};

const getTransactions = clientId => {
  fetch('/transactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientId })
  })
    .then(res => res.json())
    .then(transactions => showTransaction(transactions, clientId));
};
