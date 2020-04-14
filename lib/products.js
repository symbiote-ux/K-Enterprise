class Product {
  constructor(details) {
    const { Size, No_Of_Rolls, Weight, Ready } = details;
    this.Size = Size;
    this.No_Of_Rolls = No_Of_Rolls;
    this.Weight = Weight;
    this.Ready = Ready;
  }
  details() {
    return {
      Size: this.Size,
      No_Of_Rolls: this.No_Of_Rolls,
      Weight: this.Weight,
      Ready: this.Ready
    };
  }
  update(id, value) {
    this[id] = value;
  }
}

class Products {
  constructor() {
    this.productList = {};
  }
  static load(contents) {
    const products = new Products();
    for (const key in contents) {
      products.productList[key] = new Product(contents[key]);
    }
    return products;
  }
  details() {
    const details = {};
    for (const product in this.productList) {
      details[product] = this.productList[product].details();
    }
    return details;
  }
  update(value, id, boxId) {
    this.productList[boxId].update(id, value);
  }
  save(fs, path) {
    fs.writeFile(path, JSON.stringify(this.productList), () => {});
  }
}

module.exports = Products;
