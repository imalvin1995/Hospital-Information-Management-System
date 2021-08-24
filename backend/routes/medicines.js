const router = require('express').Router();
let Medicine = require('../models/medicine.model');

router.route('/').get((req, res) => {
    Medicine.find()
    .then(medicines => res.json(medicines))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const medicineName = req.body.medicineName;
  const quantity = req.body.quantity;

  const newMedicine = new Medicine({
    medicineName,
    quantity
  });

  newMedicine.save()
    .then(() => res.json('Medicine added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Medicine.findByIdAndDelete(req.params.id)
      .then(() => res.json('Medicine Deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
