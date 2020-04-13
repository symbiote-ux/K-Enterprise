const saveValue = value => {
  fetch('/saveValue',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(value)});
}

const productDetails = () => {
  fetch('/productDetails')
    .then(res => res.json())
    .then(details => showProductDetails(details));
};
