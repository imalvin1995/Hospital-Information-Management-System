const router = require('express').Router();
let Doctor = require('../models/doctor.model');

router.route('/').get((req, res) => {
    Doctor.find()
    .then(doctors => res.json(doctors))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const doctorID = Number(req.body.doctorID);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = Number(req.body.phone);
  const email = req.body.email;
  const specialization = req.body.specialization;
  const department = req.body.department;

  const newDoctor = new Doctor({
    doctorID,
    firstName,
    lastName,
    phone,
    email,
    specialization,
    department
  });

  newDoctor.save()
    .then(() => res.json('Doctor added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Doctor.findById(req.params.id)
      .then(doctor => res.json(doctor))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Doctor.findByIdAndDelete(req.params.id)
      .then(() => res.json('Doctor Information Deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').put((req, res) => {
    Doctor.findById(req.params.id)
      .then(doctor => {
        doctor.firstName = req.body.firstName;
        doctor.lastName = req.body.lastName;
        doctor.phone = Number(req.body.phone);
        doctor.email = req.body.email;
        doctor.specialization = req.body.specialization;
        doctor.department = req.body.department;
  
        doctor.save()
          .then(() => res.json('Doctor Information Updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
