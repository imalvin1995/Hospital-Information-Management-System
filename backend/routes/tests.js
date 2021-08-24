const router = require('express').Router();
let Test = require('../models/test.model');

router.route('/').get((req, res) => {
    Test.find()
    .then(tests => res.json(tests))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const testName = req.body.testName;
  const price = Number(req.body.price);

  const newTest = new Test({
    testName,
    price
  });

  newTest.save()
    .then(() => res.json('Test added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Test.findByIdAndDelete(req.params.id)
      .then(() => res.json('Test Deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
