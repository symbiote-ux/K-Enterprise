const showProductDetails = details => {
  for(const product in details) {
    const infoBox = document.querySelector(`#${product}`);
    for(const key in details[product]) {
      const box = document.createElement('div');
      box.innerText = `${key} : ${details[product][key]}`;
      console.log()
      box.className = 'unit';
      infoBox.appendChild(box);
    }
  }
}