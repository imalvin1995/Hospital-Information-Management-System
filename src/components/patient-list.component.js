import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Patient = props => (
  <tr>
    <td>{props.patient.patientID}</td>
    <td>{props.patient.firstName}</td>
    <td>{props.patient.lastName}</td>
    <td>{props.patient.phone}</td>
    <td>{props.patient.email}</td>
    <td>{props.patient.DOB.substring(0,10)}</td>
    <td>{props.patient.gender}</td>

    <td>
      <Link to={"/editPatient/"+props.patient._id}>edit</Link> | <a href="#" onClick={() => { props.deletePatient(props.patient._id) }}>delete</a>
    </td>
  </tr>
)

export default class PatientList extends Component {
  constructor(props) {
    super(props);

    this.deletePatient = this.deletePatient.bind(this)

    this.state = {patients: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/patients/')
      .then(response => {
        this.setState({ patients: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePatient(id) {
    axios.delete('http://localhost:5000/patients/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      patients: this.state.patients.filter(el => el._id !== id)
    })
  }

  patientList() {
    return this.state.patients.map(currentpatient => {
      return <Patient patient={currentpatient} deletePatient={this.deletePatient} key={currentpatient._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Patient's Information</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>PatientID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            { this.patientList() }
          </tbody>
        </table>
      </div>
    )
  }
}