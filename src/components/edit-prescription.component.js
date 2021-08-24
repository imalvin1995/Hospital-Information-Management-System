import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePrescription extends Component {
  constructor(props) {
    super(props);

    this.onChangeDoctorID = this.onChangeDoctorID.bind(this);
    this.onChangeMedicineName = this.onChangeMedicineName.bind(this);
    this.onChangeTestName = this.onChangeTestName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      DoctorID: 0,
      medicineName: '',
      testName: '',
      date: new Date(),
      doctors:[],
      medicines:[],
      tests:[]
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/doctors/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            doctors: response.data.map(doctor => doctor.doctorID),
            doctorID: response.data[0].doctorID
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

      axios.get('http://localhost:5000/medicines/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            medicines: response.data.map(medicine => medicine.medicineName),
            medicineName: response.data[0].medicineName
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

      axios.get('http://localhost:5000/tests/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            tests: response.data.map(test => test.testName),
            testName: response.data[0].testName
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  onChangeDoctorID(e) {
    this.setState({
        doctorID: e.target.value
    })
  }
  onChangeMedicineName(e) {
    this.setState({
      medicineName: e.target.value
    })
  }
  onChangeTestName(e) {
    this.setState({
      testName: e.target.value
    })
  }
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const prescription = {
      doctorID: this.state.doctorID,
      medicineName: this.state.medicineName,
      testName: this.state.testName,
      date: this.state.date,
    }

    console.log(prescription);

    axios.put('http://localhost:5000/prescriptions/'+this.props.match.params.id, prescription)
      .then(res => console.log(res.data));

    window.location = '/prescription/';
  }

  render() {
    return (
      <div>
        <h3>Edit Prescription</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>DoctorID: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.doctorID}
              onChange={this.onChangeDoctorID}>
              {
                this.state.doctors.map(function(doctor) {
                  return <option 
                    key={doctor}
                    value={doctor}>{doctor}
                    </option>;
                })
              }
          </select>
          </div>
          <div className="form-group"> 
            <label>Medicine Name: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.medicineName}
              onChange={this.onChangeMedicineName}>
              {
                this.state.medicines.map(function(medicine) {
                  return <option 
                    key={medicine}
                    value={medicine}>{medicine}
                    </option>;
                })
              }
          </select>
          </div>
          <div className="form-group"> 
            <label>Test Name: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.testName}
              onChange={this.onChangeTestName}>
              {
                this.state.tests.map(function(test) {
                  return <option 
                    key={test}
                    value={test}>{test}
                    </option>;
                })
              }
          </select>
          </div>
          <div className="form-group"> 
            <label>Created Date: </label>
            <div>
                <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
                />
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Edit Prescription" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}