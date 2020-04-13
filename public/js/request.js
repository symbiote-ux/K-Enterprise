const productDetails = () => {
  fetch('/productDetails')
    .then(res => res.json())
    .then(details => showProductDetails(details));
};
