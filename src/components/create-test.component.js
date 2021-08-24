import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTest extends Component {
  constructor(props) {
    super(props);

    this.onChangeTestName = this.onChangeTestName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      testName: '',
      price: 0
    }
  }

  onChangeTestName(e) {
    this.setState({
      testName: e.target.value
    })
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const test = {
      testName: this.state.testName,
      price: this.state.price
    }

    console.log(test);

    axios.post('http://localhost:5000/tests/add', test)
      .then(res => console.log(res.data));

    this.setState({
      testName: '',
      price: 0
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Test</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Test Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.testName}
                onChange={this.onChangeTestName}
                />
          </div>
          <div className="form-group"> 
            <label>Test Price: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.price}
                onChange={this.onChangePrice}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Test" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}