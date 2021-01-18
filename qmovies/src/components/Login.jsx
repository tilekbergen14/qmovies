import React from "react";
import {Link} from "react-router-dom"
import {MovieContext} from "../MovieContext"
import axios from "axios"

export default class Login extends React.Component {
  static contextType = MovieContext
  state = {
    email: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:5000/auth`, {"email": this.state.email, "password": this.state.password})
        .then(result => this.context.createUser(result.data))
        .catch(err => console.log(err))
    window.location = "/"
  };
  render(){
    return (
      <div style={{height: "100%"}} className="container d-flex align-items-center login">
        <div className="w-50 d-width m-auto bg-info p-5">
          <form action="" onSubmit={this.onSubmit}>
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
          <button type="submit" className="btn btn-primary w-100">Sign in</button>
          </form>
          <p className="text-center m-0 text-warning">or</p>
          <Link to="/register"><button className="btn btn-success w-100">Create account</button></Link>
        </div>
      </div>
    );
  }
}
