class Product {
  constructor(details) {
    const { Size, No_Of_Rolls, Weight, Ready } = details;
    this.size = Size;
    this.noOfRolls = No_Of_Rolls;
    this.weight = Weight;
    this.ready = Ready;
  }
  details() {
    return {
      Size: this.size,
      No_Of_Rolls: this.noOfRolls,
      Weight: this.weight,
      Ready: this.ready
    };
  }
}

class Products {
  constructor() {
    this.productList = {};
  }
  static load(contents) {
    const products = new Products();
    for(const key in contents) {
      products.productList[key] = new Product(contents[key]);
    };
    return products;
  }
  details() {
    const details = {};
    for(const product in this.productList) {
      details[product] = this.productList[product].details();
    }
    return details;
  }
}

module.exports = Products;
