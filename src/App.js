import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import CreateDoctor from "./components/create-doctor.component";
import CreatePatient from "./components/create-patient.component";
import CreatePrescription from "./components/create-prescription.component";
import CreateMedicine from "./components/create-medicine.component";
import CreateTest from "./components/create-test.component";
import DoctorList from "./components/doctor-list.component";
import PatientList from "./components/patient-list.component";
import PrescriptionList from "./components/prescroption-list.component";
import MedicineList from "./components/medicine-list.component";
import TestList from "./components/test-list.component";
import EditDoctor from "./components/edit-doctor.component";
import EditPatient from "./components/edit-patient.component";
import EditPrescription from "./components/edit-prescription.component";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Route path="/createDoctor" component={CreateDoctor} />
      <Route path="/createPatient" component={CreatePatient} />
      <Route path="/createPrescription" component={CreatePrescription} />
      <Route path="/createMedicine" component={CreateMedicine} />
      <Route path="/createTest" component={CreateTest} />
      <Route path="/doctor/" exact component={DoctorList} />
      <Route path="/patient/" exact component={PatientList} />
      <Route path="/prescription/" exact component={PrescriptionList} />
      <Route path="/medicine/" exact component={MedicineList} />
      <Route path="/test/" exact component={TestList} />
      <Route path="/editDoctor/:id" component={EditDoctor} />
      <Route path="/editPatient/:id" component={EditPatient} />
      <Route path="/editPrescription/:id" component={EditPrescription} />
      </div>
    </Router>
  );
}

export default App;
