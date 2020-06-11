// CheckModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CheckModel = new Schema({
  check: {
    type: String
  },
},{
    collection: 'checks'
});

module.exports = mongoose.model('CheckModel', CheckModel);