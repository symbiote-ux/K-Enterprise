const showProductDetails = details => {
  for(const product in details) {
    const infoBox = document.querySelector(`#${product}`);
    for(const key in details[product]) {
      const box = document.createElement('div');
      box.innerHTML = `<div class="name">${key}</div>
      <input class="value" id="" value="${details[product][key]}" onchange="saveValue(this.value)"/>`;
      box.className = 'unit';
      infoBox.appendChild(box);
    }
  }
}