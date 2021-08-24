import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Medicine = props => (
  <tr>
    <td>{props.medicine.medicineName}</td>
    <td>{props.medicine.quantity}</td>
    <td>
        <a href="#" onClick={() => { props.deleteMedicine(props.medicine._id) }}>delete</a>
    </td>
  </tr>
)

export default class MedicineList extends Component {
  constructor(props) {
    super(props);

    this.deleteMedicine = this.deleteMedicine.bind(this)

    this.state = {medicines: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/medicines/')
      .then(response => {
        this.setState({ medicines: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteMedicine(id) {
    axios.delete('http://localhost:5000/medicines/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      medicines: this.state.medicines.filter(el => el._id !== id)
    })
  }

  medicineList() {
    return this.state.medicines.map(currentmedicine => {
      return <Medicine medicine={currentmedicine} deleteMedicine={this.deleteMedicine} key={currentmedicine._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Medicine's Information</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Medicine Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            { this.medicineList() }
          </tbody>
        </table>
      </div>
    )
  }
}