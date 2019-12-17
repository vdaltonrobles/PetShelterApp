console.log("server/config/routes.js is running");

const Pets = require('../controllers/pets');

module.exports = function(app) {
    app.get("/pets", Pets.getAll);  // tested
    app.get("/pets/:_id", Pets.getOne);  // tested
    app.post("/pets/new", Pets.create); // tested
    app.put("/pets/:_id/edit", Pets.update);
    app.delete("/pets/:_id", Pets.adopt);  // tested
    app.put("/pets/:_id", Pets.likes);  // tested
    
}