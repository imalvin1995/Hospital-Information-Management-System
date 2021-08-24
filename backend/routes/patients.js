const router = require('express').Router();
let Patient = require('../models/patient.model');

router.route('/').get((req, res) => {
    Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const patientID = Number(req.body.patientID);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = Number(req.body.phone);
  const email = req.body.email;
  const DOB = Date.parse(req.body.DOB);
  const gender = req.body.gender;

  const newPatient = new Patient({
    patientID,
    firstName,
    lastName,
    phone,
    email,
    DOB,
    gender
  });

  newPatient.save()
    .then(() => res.json('Patient added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Patient.findById(req.params.id)
      .then(patient => res.json(patient))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Patient.findByIdAndDelete(req.params.id)
      .then(() => res.json('Patient Information Deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').put((req, res) => {
    Patient.findById(req.params.id)
      .then(patient => {
        patient.firstName = req.body.firstName;
        patient.lastName = req.body.lastName;
        patient.phone = Number(req.body.phone);
        patient.email = req.body.email;
        patient.DOB = Date.parse(req.body.DOB);
        patient.gender = req.body.gender;

        patient.save()
          .then(() => res.json('Patient Information Updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
