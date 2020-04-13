const fs = require('fs');
const express = require('express');
const Products = require('./products');
const path = `${__dirname}/../dataStore/productDetails.json`;
const app = express();

const content = fs.readFileSync(path, 'utf8');
const products = Products.load(JSON.parse(content));

const updateValue = (req,res)=> {
  const {value,id,boxId} = req.body;
  products.update(value,id,boxId);
  products.save(fs,path);
  res.end();
}

const getProductDetails = (req, res) => {
  res.json(products.details());
};

app.use(express.json());
app.use(express.static('public'));
app.get('/productDetails', getProductDetails);
app.post('/saveValue', updateValue);

module.exports = app;