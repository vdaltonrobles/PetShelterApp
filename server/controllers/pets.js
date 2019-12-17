console.log("server/controllers/pets.js is running");

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

class PetController {
    getAll(req, res) {
        Pet.find({}).sort({"type": 1}).exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }

    getOne(req, res) {
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }

    create(req, res) {
        let pet = new Pet(req.body);
        pet.save()
            .then(() => res.json({'msg': 'ok'}))
            .catch(err => res.json(err));
    }

    update(req, res){
        Pet.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true, context: 'query'})
        .then( () => res.json({'msg': 'ok'}))
        .catch(err => res.json(err));
    }

    adopt(req, res) {
        Pet.remove({_id: req.params._id})
            .then(() => res.json({'msg': 'ok'}))
            .catch(err => res.json(err));
    }

    likes(req, res) {
        Pet.findOneAndUpdate({_id: req.params._id}, { $inc: { likes : 1 } })
            .then(() => res.json({'msg': 'ok'}))
            .catch(err => res.json(err));
    }

}

module.exports = new PetController();