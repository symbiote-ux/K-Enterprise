const fs = require('fs');
const express = require('express');
const Products = require('./products');
const path = `${__dirname}/../dataStore/productDetails.json`;
const app = express();

const content = fs.readFileSync(path, 'utf8');
const products = Products.load(JSON.parse(content));

const getProductDetails = (req, res) => {
  res.json(products.details());
};

app.use(express.static('public'));
app.get('/productDetails', getProductDetails);

module.exports = app;