import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMedicine extends Component {
  constructor(props) {
    super(props);

    this.onChangeMedicineName = this.onChangeMedicineName.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      medicineName: '',
      quantity: 0
    }
  }

  onChangeMedicineName(e) {
    this.setState({
      medicineName: e.target.value,
    })
  }
  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const medicine = {
      medicineName: this.state.medicineName,
      quantity: this.state.quantity
    }

    console.log(medicine);

    axios.post('http://localhost:5000/medicines/add', medicine)
      .then(res => console.log(res.data));

    this.setState({
        medicineName: '',
        quantity: 0
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Medicine</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Medicine Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.medicineName}
                onChange={this.onChangeMedicineName}
                />
          </div>
          <div className="form-group"> 
            <label>Quantity: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Medicine" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}