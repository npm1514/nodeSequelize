var account = require('./account.js');
var Seq = require('sequelize');
var seq = new Seq('postgres://' + account.username + ':' + account.password + '@localhost:5432/animalsDB');
//postgres, npmarucci=username, password=password, 5432=port, animalsDB=databasename

var Animal = seq.define('animal', {//animal=tablename
  id: {type: Seq.INTEGER, autoIncrement: true, primaryKey: true},
  name: {type: Seq.STRING, unique: true},
  species: Seq.STRING,
  age: Seq.INTEGER,
  sound: Seq.STRING,
  isAwesome: {type: Seq.BOOLEAN, defaultValue: true}
});
Animal.sync();

module.exports = Animal;
