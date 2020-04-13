class Product {
  constructor(details) {
    const { size, noOfRolls, weight, readyProductWeight } = details;
    this.size = size;
    this.noOfRolls = noOfRolls;
    this.weight = weight;
    this.readyProductWeight = readyProductWeight;
  }
  details() {
    return {
      size: this.size,
      noOfRolls: this.noOfRolls,
      weight: this.weight,
      readyProductWeight: this.readyProductWeight
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
