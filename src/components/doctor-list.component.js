import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Doctor = props => (
  <tr>
    <td>{props.doctor.doctorID}</td>
    <td>{props.doctor.firstName}</td>
    <td>{props.doctor.lastName}</td>
    <td>{props.doctor.phone}</td>
    <td>{props.doctor.email}</td>
    <td>{props.doctor.specialization}</td>
    <td>{props.doctor.department}</td>

    <td>
      <Link to={"/editDoctor/"+props.doctor._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDoctor(props.doctor._id) }}>delete</a>
    </td>
  </tr>
)

export default class DoctorList extends Component {
  constructor(props) {
    super(props);

    this.deleteDoctor = this.deleteDoctor.bind(this)

    this.state = {doctors: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/doctors/')
      .then(response => {
        this.setState({ doctors: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteDoctor(id) {
    axios.delete('http://localhost:5000/doctors/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      doctors: this.state.doctors.filter(el => el._id !== id)
    })
  }

  doctorList() {
    return this.state.doctors.map(currentdoctor => {
      return <Doctor doctor={currentdoctor} deleteDoctor={this.deleteDoctor} key={currentdoctor._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Doctor's Information</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>DoctorID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Specialization</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            { this.doctorList() }
          </tbody>
        </table>
      </div>
    )
  }
}