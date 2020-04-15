const fs = require('fs');
const express = require('express');
const Products = require('./products');
const Clients = require('./clients');
const productPath = `${__dirname}/../dataStore/productDetails.json`;
const clientPath = `${__dirname}/../dataStore/clientDetails.json`;
const app = express();

const productContent = fs.readFileSync(productPath, 'utf8');
const products = Products.load(JSON.parse(productContent));

const clientContent = fs.readFileSync(clientPath, 'utf8');
const clients = Clients.load(JSON.parse(clientContent));

const getTransactions =(req,res) => {
  const {clientId} = req.body;
  res.json(clients.getTransactions(clientId));
}

const getClientsDetail = (req,res) =>{
  res.json(clients.details());
};

const updateValue = (req, res) => {
  const { value, id, boxId } = req.body;
  products.update(value, id, boxId);
  products.save(fs, path);
  res.end();
};

const getProductDetails = (req, res) => {
  res.json(products.details());
};

const getTransactions = (req, res) => {
  const { clientId } = req.body;
  res.json(clients.getTransactions(clientId));
};

app.use(express.json());
app.use(express.static('public'));
app.get('/productDetails', getProductDetails);
app.get('/clientsDetail', getClientsDetail);
app.post('/saveValue', updateValue);
app.post('/transactions',getTransactions);

module.exports = app;
