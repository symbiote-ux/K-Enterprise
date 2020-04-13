const productDetails = () => {
  fetch('/productDetails')
    .then(res => res.json())
    .then(details => {
      console.log('--------', details);
    });
};
