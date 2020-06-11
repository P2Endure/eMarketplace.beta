// CheckRoute.js

const checkRoute = require('express').Router(),
  CheckModel = require('./CheckModel');

  checkRoute.route('/add').post(function (req, res) {
    let checkmodel = new CheckModel(req.body);
    checkmodel.save()
      .then(Checkvalue => {
        res.status(200).json({'Checkvalue': 'Checkbox values have added successfully'});
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });

module.exports = checkRoute;