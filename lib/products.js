class Product {
  constructor(details) {
    const { name, size, noOfRolls, weight, readyProductWeight } = details;
    this.name = name;
    this.size = size;
    this.noOfRolls = noOfRolls;
    this.weight = weight;
    this.readyProductWeight = readyProductWeight;
  }
  details() {
    return {
      name: this.name,
      size: this.size,
      noOfRolls: this.noOfRolls,
      weight: this.weight,
      readyProductWeight: this.readyProductWeight
    };
  }
}

class Products {
  constructor() {
    this.productList = [];
  }
  static load(contents) {
    const products = new Products();
    contents.forEach(content => {
      products.productList.push(new Product(content));
    });
    return products;
  }
  details() {
    return [...this.productList];
  }
}

module.exports = Products;
