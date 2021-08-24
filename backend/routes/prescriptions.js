const router = require('express').Router();
let Prescription = require('../models/prescription.model');

router.route('/').get((req, res) => {
    Prescription.find()
    .then(prescriptions => res.json(prescriptions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const doctorID = Number(req.body.doctorID);
  const patientID = Number(req.body.patientID);
  const medicineName = req.body.medicineName;
  const testName = req.body.testName;
  const date = Date.parse(req.body.date);

  const newPrescription = new Prescription({
    doctorID,
    patientID,
    medicineName,
    testName,
    date
  });

  newPrescription.save()
    .then(() => res.json('Prescription added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Prescription.findById(req.params.id)
      .then(prescription => res.json(prescription))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Prescription.findByIdAndDelete(req.params.id)
      .then(() => res.json('Prescription Deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').put((req, res) => {
    Prescription.findById(req.params.id)
      .then(prescription => {
        prescription.medicineName = req.body.medicineName;
        prescription.testName = req.body.testName;
        prescription.date = Date.parse(req.body.date);

        prescription.save()
          .then(() => res.json('Prescription Updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
