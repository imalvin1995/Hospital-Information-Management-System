const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const doctorsRouter = require('./routes/doctors');
const patientsRouter = require('./routes/patients');
const prescriptionsRouter = require('./routes/prescriptions');
const medicinesRouter = require('./routes/medicines');
const testsRouter = require('./routes/tests');


app.use('/doctors', doctorsRouter);
app.use('/patients', patientsRouter);
app.use('/prescriptions', prescriptionsRouter);
app.use('/medicines', medicinesRouter);
app.use('/tests', testsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});