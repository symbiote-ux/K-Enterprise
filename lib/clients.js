class Transaction {
  constructor(transaction) {
    const {
      Products,
      Price,
      Total_Amount,
      Amount_Paid,
      Amount_Left,
      Time_Stamp
    } = transaction;
    this.Products = [...Products];
    this.Price = Price;
    this.Total_Amount = Total_Amount;
    this.Amount_Paid = Amount_Paid;
    this.Amount_Left = Amount_Left;
    this.Time_Stamp = Time_Stamp;
  }
}

class Client {
  constructor() {
    this.Personal_Details = {};
    this.Total_Amount_Due = 0;
    this.Product_Details = [];
  }
  static load({ Personal_Details, Product_Details, Total_Amount_Due }) {
    const client = new Client();
    client.Personal_Details = Personal_Details;
    client.Total_Amount_Due = Total_Amount_Due;
    Product_Details.forEach(transaction => {
      client.Product_Details.push(new Transaction(transaction));
    });
    return client;
  }
  getPersonalDetails() {
    return {
      Personal_Details: { ...this.Personal_Details },
      Total_Amount_Due: this.Total_Amount_Due
    };
  }

  get transactions() {
    return [...this.Product_Details];
  }
}

class Clients {
  constructor() {
    this.clientList = {};
  }
  static load(contents) {
    const clients = new Clients();
    for (const key in contents) {
      clients.clientList[key] = Client.load(contents[key]);
    }
    return clients;
  }
  details() {
    const details = {};
    for (const client in this.clientList) {
      details[client] = this.clientList[client].getPersonalDetails();
    }
    return details;
  }
  getTransactions(clientId) {
    return this.clientList[clientId].transactions;
  }
}

module.exports = Clients;
