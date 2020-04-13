const showProductDetails = details => {
  for(const product in details) {
    const infoBox = document.querySelector(`#${product}`);
    for(const key in details[product]) {
      const box = document.createElement('div');
      box.innerHTML = `<div class="name">${key}</div>
      <div class="value" contentEditable="true">${details[product][key]}</div>`;
      box.className = 'unit';
      infoBox.appendChild(box);
    }
  }
}