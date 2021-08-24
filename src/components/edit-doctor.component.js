import React, { Component } from 'react';
import axios from 'axios';

export default class EditDoctor extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName= this.onChangeFirstName.bind(this);
    this.onChangeLastName= this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSpecialization = this.onChangeSpecialization.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      phone:0,
      email: '',
      specialization: '',
      department:''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/doctors/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          phone: response.data.phone,
          email: response.data.email,
          specialization: response.data.specialization,
          department: response.data.department
        })   
      })
      .catch(function (error) {
        console.log(error);
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
  onChangeSpecialization(e) {
    this.setState({
      specialization: e.target.value
    })
  }
  onChangeDepartment(e) {
    this.setState({
      department: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const doctor = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      specialization: this.state.specialization,
      department: this.state.department
    }

    console.log(doctor);

    axios.put('http://localhost:5000/doctors/'+this.props.match.params.id, doctor)
      .then(res => console.log(res.data));

      window.location = '/doctor/';
  }

  render() {
    return (
      <div>
        <h3>Edit Doctor</h3>
        <form onSubmit={this.onSubmit}>
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
            <label>Specialization: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.specialization}
                onChange={this.onChangeSpecialization}
                />
          </div>
          <div className="form-group"> 
            <label>Department: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.department}
                onChange={this.onChangeDepartment}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Edit Doctor" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}