// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/burgers", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
  
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({})
      .then(function(dbBurger) {
        res.json(dbBurger);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/burgers/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    db.Burger.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbBurger) {
      res.json(dbBurger);
    })
    // return the result to the user with res.json
});



  // Get route for retrieving a single post
  app.get("/api/burgers/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    db.Burger.findOne({
    where: {
      id: req.params.id
    }
    .then(function(dbBurger) {
      res.json(dbBurger);
    })
});

});

  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Burger.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }).then(function(newBurger) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(newBurger);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/burgers/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
      db.Burger.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  // PUT route for updating posts
  app.put("/api/burgers", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
     // PUT route for updating todos. We can get the updated todo data from req.body
    var objToUpdate = { 
      id: req.body.id,
      title: req.body.text,
      body: req.body.body,
      category: req.body.category
    }

     db.Burger.update(objToUpdate,
       {
      where: {
        id: objToUpdate.id
      }
    })
    .then(function(dbBurger) {
      res.json(dbBurger);
    })
  });

};
