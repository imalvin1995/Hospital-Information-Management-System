import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Hospital Information Management System</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/createDoctor" className="nav-link">Create Doctor</Link>
            </li>
            <li className="navbar-item">
            <Link to="/createPatient" className="nav-link">Create Patient</Link>
            </li>
            <li className="navbar-item">
            <Link to="/createPrescription" className="nav-link">Create Prescription</Link>
            </li>
            <li className="navbar-item">
            <Link to="/createMedicine" className="nav-link">Create Medicine</Link>
            </li>
            <li className="navbar-item">
            <Link to="/createTest" className="nav-link">Create Test</Link>
            </li>
            <li className="navbar-item">
            <Link to="/doctor/" className="nav-link">Doctor's Info</Link>
            </li>
            <li className="navbar-item">
            <Link to="/patient/" className="nav-link">Patient's Info</Link>
            </li>
            <li className="navbar-item">
            <Link to="/prescription/" className="nav-link">Prescription's Info</Link>
            </li>
            <li className="navbar-item">
            <Link to="/medicine/" className="nav-link">Medicine's Info</Link>
            </li>
            <li className="navbar-item">
            <Link to="/test/" className="nav-link">Test's Info</Link>
            </li>
        </ul>
        </div>
      </nav>
    );
  }
}