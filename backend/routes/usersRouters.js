const database = require("../database/appDatabase");
const express = require("express");
const crypto = require("crypto");

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
    const sqlQuery = `SELECT * FROM users`;

    database.query(sqlQuery, (err, result) => {
        (err && res.send(null)) || res.send(result);
    });
});

usersRouter.get("/:token", (req, res) => {
    const token = req.params.token
    const sqlQuery = `SELECT * FROM users WHERE token = '${token}'`;

    database.query(sqlQuery, (err, result) => {
        (err && res.send(null)) || res.send(result);
    });
});

usersRouter.post("/login", (req, res) => {
    const { email, password } = req.body;

    const sqlQuery = `SELECT *
    FROM users
    WHERE users.email='${email}' AND users.password='${password}'`

    database.query(sqlQuery, (err, result) => {
        (err && res.send(null)) || res.send(result);
    });
});

usersRouter.post("/", (req, res) => {
    const { sex, firstName, lastName, email, phone, password, image } = req.body;
    const token = crypto.randomUUID();
    const sqlQuery = `INSERT INTO users VALUES (NULL, '${token}', '${sex}', '${firstName}', '${lastName}', '${email}', '${phone}', '${password}', '${image}')`;

    database.query(sqlQuery, (err, result) => {
        (err && res.send(null)) || res.send({ token });
    });
});

usersRouter.put("/:id", (req, res) => {
    const id = req.params.id
    const body = Object.entries(req.body);

    const sqlQuery = `UPDATE users SET ${body.map(param => typeof param[1] === 'number' ? `${param[0]}=${param[1]}` : `${param[0]}='${param[1]}'`)} WHERE id=${id}`;

    console.log(sqlQuery);

    database.query(sqlQuery, (err, result) => {
        (err && res.send(null)) || res.send(true);
    });
});

usersRouter.delete("/:token", (req, res) => {
    const token = req.params.token
    const sqlQuery = `DELETE FROM users WHERE token='${token}'`;

    database.query(sqlQuery, (err, result) => {
        (err && res.send(null)) || res.send(true);
    });
});

module.exports = usersRouter;
