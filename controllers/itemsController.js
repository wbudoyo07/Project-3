const db = require("../models");

// Defining methods for the ItemsController
module.exports = {
  findAll: function(req, res) {
    db.Item
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Item
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Item
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Item
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Item
      .create(req.body)
      .then(function(dbModel) {
        return db.Admin.findOneAndUpdate({ _id:req.params.id}, { $push: { message: dbModel }},  { new: true })
      })
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.json(err);
      });
  },

  // createResponse : function(req,res) {
  //   db.Item
  //     .create(req.body)
  //     .then(function(dbModel) {
  //       return db.Item.findOneAndUpdate({_id:req.params.id}, {response:dbModel}, {new:true})
  //     })
  //     .then(function(dbModel) {
  //       res.json(dbModel)
  //     })
  // }
};
