import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import {MovieContext} from "../MovieContext"

export default class Register extends React.Component{
  static contextType = MovieContext
  state = {
    name: "",
    email: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault()
    const data = {
      "username": this.state.name,
      "email": this.state.email,
      "password": this.state.password
    }
    axios.post(`http://localhost:5000/users`, data)
        .then(result => this.context.createUser(result.data))
        .catch(err => console.log(err))
  };

  render(){
    return (
      <div
        style={{ height: "100%" }}
        className="container d-flex align-items-center login"
      >
        <div className="w-50 d-width m-auto bg-info p-5">
          <form action="" onSubmit={this.onSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="username"
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="password"
                onChange={this.handleChange}
                value={this.state.password}
                name="password"
              />
            </div>
            <button className="w-100 btn btn-primary ">
              Sign up
            </button>
          </form>
          <p className="text-center m-0 text-warning">or</p>
          <Link to="/login">
            <button className="btn btn-success w-100">Login</button>
          </Link>
        </div>
      </div>
    );
  }
}
