"use strict";
let calculation = require('./calculate');
module.exports = (app) => {
    app.get('/', function (req, res) {
        res.send(calculation.execute());
    });
};
