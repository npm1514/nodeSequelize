var Animal = require('./animalModel.js');

module.exports = {
  create: function(req, res) {
    Animal.create(req.body)
    .then(function(result, err){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  read: function(req, res) {
    Animal.findAll()
    .then(function(result, err) {
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function(req, res){
    Animal.findOne({
      where: {id: req.params.id}
    })
    .then(function(animal){
        animal.update(req.body)
        .then(function(result, err){
          if(err){
            res.send(err);
          } else {
            res.send(result);
          }
        })
    })
  },
  delete: function(req, res){
    Animal.destroy({
      where: {id: req.params.id}
    }).then(function(result, err){
      if(err){
        res.send(err);
      } else {
        res.send(req.body);
      }
    });
  }
};
