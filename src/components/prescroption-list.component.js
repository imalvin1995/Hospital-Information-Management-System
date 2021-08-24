import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Prescription = props => (
  <tr>
    <td>{props.prescription.patientID}</td>
    <td>{props.prescription.doctorID}</td>
    <td>{props.prescription.medicineName}</td>
    <td>{props.prescription.testName}</td>
    <td>{props.prescription.date.substring(0,10)}</td>

    <td>
      <Link to={"/editPrescription/"+props.prescription._id}>edit</Link> | <a href="#" onClick={() => { props.deletePrescription(props.prescription._id) }}>delete</a>
    </td>
  </tr>
)

export default class PrescriptionList extends Component {
  constructor(props) {
    super(props);

    this.deletePrescription = this.deletePrescription.bind(this)

    this.state = {prescriptions: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/prescriptions/')
      .then(response => {
        this.setState({ prescriptions: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePrescription(id) {
    axios.delete('http://localhost:5000/prescriptions/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      prescriptions: this.state.prescriptions.filter(el => el._id !== id)
    })
  }

  prescriptionList() {
    return this.state.prescriptions.map(currentprescription => {
      return <Prescription prescription={currentprescription} deletePrescription={this.deletePrescription} key={currentprescription._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Prescription's Information</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>PatientID</th>
              <th>doctorID</th>
              <th>Medicine Name</th>
              <th>Test Name</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            { this.prescriptionList() }
          </tbody>
        </table>
      </div>
    )
  }
}