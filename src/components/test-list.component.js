import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Test = props => (
  <tr>
    <td>{props.test.testName}</td>
    <td>{props.test.price}</td>
    <td>
        <a href="#" onClick={() => { props.deleteTest(props.test._id) }}>delete</a>
    </td>
  </tr>
)

export default class TestList extends Component {
  constructor(props) {
    super(props);

    this.deleteTest = this.deleteTest.bind(this)

    this.state = {tests: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/tests/')
      .then(response => {
        this.setState({ tests: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTest(id) {
    axios.delete('http://localhost:5000/tests/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      tests: this.state.tests.filter(el => el._id !== id)
    })
  }

  testList() {
    return this.state.tests.map(currenttest=> {
      return <Test test={currenttest} deleteTest={this.deleteTest} key={currenttest._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Test's Information</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Test Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { this.testList() }
          </tbody>
        </table>
      </div>
    )
  }
}