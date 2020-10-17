import React, { Component } from "react";
import * as MyConstClass from '../../Constant/Constants'

export default class Login extends Component {

  constructor(props){
    super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          //Credentials
          email:'',
          passsword:'',
        }
  }

  onChangeEmail(e){
    this.setState({
      email:e.target.value
    })
}

onchangePassword(e){
  this.setState({
    passsword:e.target.value
  })
}

onSubmit(e){

  e.preventDefault();

  if(this.state.email == MyConstClass.Procurement_Staff_User_Name && this.state.passsword == MyConstClass.Procurement_Staff_Password){
    window.location = '/Dashboard';
  }
  else if(this.state.email ==MyConstClass.Auth_Manager_User_Name && this.state.passsword ==MyConstClass.Auth_Manager_Password){
    window.location = '/AuthDashBoard';
  }
  else{
    alert("Invalid Credentials . Please try again");
  }
 

}
  render() {
    return (<div className="hold-transaction login-page">
    <div className="login-box">
      <div className="login-logo">
        <a href="../../index2.html">
          <b>Procurement System</b>
        </a>
      </div>
      {/* /.login-logo */}
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={this.onSubmit}>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email} 
                onChange={this.onChangeEmail}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.passsword} 
                onChange={this.onchangePassword}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
        </div>
        {/* /.login-card-body */}
      </div>
    </div>
  </div>)

}

}