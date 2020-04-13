const fs = require('fs');
const express = require('express');
const Products = require('./products');
const path = `${__dirname}/../dataStore/productDetails.json`;
const app = express();

const content = fs.readFileSync(path, 'utf8');
const products = new Products(content);

const getProductDetails = (req, res) => {
  console.log("inside getProduct details");
  res.json(products.details());
};

app.use(()=> console.log("app started"));
app.use(express.static('public'));
app.get('/productDetails', getProductDetails);

module.exports = app;