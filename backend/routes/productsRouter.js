const database = require("../database/appDatabase");
const express = require("express");

const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  const sqlQuery = `SELECT * FROM products`;

  database.query(sqlQuery, (err, result) => {
    (err && res.send(null)) || res.send(result);
  });
});

productsRouter.get("/:productID", (req, res) => {
  const productID = req.params.productID;
  const sqlQuery = `SELECT * FROM products WHERE id=${productID}`;

  database.query(sqlQuery, (err, result) => {
    (err && res.send(null)) || res.send(result);
  });
});

productsRouter.post("/", (req, res) => {
  const { name, price, count, cover } = req.body;
  const sqlQuery = `INSERT INTO products VALUES (NULL,'${name}', ${price},'${count}','${cover}')`;

  console.log(sqlQuery);

  database.query(sqlQuery, (err, result) => {
    (err && res.send(null)) || res.send(true);
  });
});

productsRouter.put("/:productID", (req, res) => {
  const productID = req.params.productID;
  const body = Object.entries(req.body);
  const sqlQuery = `UPDATE products SET ${body.map((param) =>
    typeof param[1] === "number"
      ? `${param[0]}=${param[1]}`
      : `${param[0]}='${param[1]}'`
  )} WHERE id=${productID}`;

  database.query(sqlQuery, (err, result) => {
    (err && res.send(null)) || res.send(true);
  });
});

productsRouter.delete("/:productID", (req, res) => {
  const productID = req.params.productID;
  const sqlQuery = `DELETE FROM products WHERE id=${productID}`;

  database.query(sqlQuery, (err, result) => {
    (err && res.send(null)) || res.send(true);
  });
});

module.exports = productsRouter;
