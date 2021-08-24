import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePatient extends Component {
  constructor(props) {
    super(props);

    this.onChangePatientID = this.onChangePatientID.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      patientID: 0,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      DOB: new Date(),
      gender:''
    }
  }

  onChangePatientID(e) {
    this.setState({
        patientID: e.target.value
    })
  }
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeDOB(date) {
    this.setState({
      DOB: date
    })
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const patient = {
      patientID: this.state.patientID,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      DOB: this.state.DOB,
      gender: this.state.gender
    }

    console.log(patient);

    axios.post('http://localhost:5000/patients/add', patient)
      .then(res => console.log(res.data));

    this.setState({
        patientID: 0,
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        DOB: new Date(),
        gender:''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Patient</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>PatientID: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.patientID}
                onChange={this.onChangePatientID}
                />
          </div>
          <div className="form-group"> 
            <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
                />
          </div>
          <div className="form-group"> 
            <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                />
          </div>
          <div className="form-group"> 
            <label>Phone Number: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.phone}
                onChange={this.onChangePhone}
                />
          </div>
          <div className="form-group"> 
            <label>Email Address: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group"> 
            <label>DOB: </label>
            <div>
                <DatePicker
                selected={this.state.DOB}
                onChange={this.onChangeDOB}
                />
            </div>
          </div>
          <div className="form-group"> 
            <label>Gender: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.gender}
                onChange={this.onChangeGender}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Patient" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}