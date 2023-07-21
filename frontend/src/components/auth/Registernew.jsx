import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input } from "../common";
import Swal from "sweetalert2";
import { registerUser } from "../../actions/authActions";
import NavBar from "../NavBar";

class Registernew extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  };
  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleChange = (value) => {
    this.setState({});
  };

  registerUser = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
      phone_number,
    } = this.state;
    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      password === "" ||
      confirm_password === ""
    ) {
      Swal.fire("Error", "All fields should be filled", "error");
      if (password !== confirm_password) {
        Swal.fire("Error", "Passwords do not match!", "error");
      }
    } else {
      let data = {
        first_name,
        last_name,
        email,
        password,
        phone_number,
      };
      this.props.registerUser(data, this.props.history);
    }
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
      phone_number,
    } = this.state;

    return (
      <>
        <div className="container sign-up mt-5">
          <div className="d-flex flex-column align-items-center gap-5">
            <img
              src="./assets/elogo.png"
              className="d-block logo"
              alt="banner 1"
            />

          </div>
          <form className="mt-3">
            <div className="form_group d-flex flex-row justify-content-between align-items-center mb-3">
              <div className="">
                <label for="first_name" className="form-label">
                  First name
                </label>
                <Input
                  placeholder="Enter your first name"
                  type="text"
                  value={first_name}
                  name="first_name"
                  onChange={this.onChange}
                />
              </div>
              <div className="">
                <label for="last_name" className="form-label">
                  Last name
                </label>
                <Input
                  placeholder=" Enter your last name"
                  type="text"
                  value={last_name}
                  name="last_name"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form_groupalign-items-center mb-3">
         
            <div className="">
              <label for="email" className="form-label">
                Email
              </label>
              <Input
                placeholder="Enter your email - j.doe@alustudent.com"
                type="email"
                value={email}
                name="email"
                onChange={this.onChange}
              />
            </div>
            </div>
            
            <div className="form_group  align-items-center mb-3">
            <div className="">
              <label for="email" className="form-label">
                Phone number
              </label>
              <Input
                placeholder="Enter your phone number - +254798217661"
                type="phone_number"
                value={phone_number}
                name="phone_number"
                onChange={this.onChange}
              />
            </div>
          
           </div>
         
           <div className="form_group d-flex flex-row justify-content-between align-items-center mb-3">

            <div className="">
              <label for="password" className="form-label">
                Password
              </label>
              <Input
                placeholder="Create password"
                type="password"
                value={password}
                name="password"
                onChange={this.onChange}
              />
            </div>
            <div className="">
              <label for="password" className="form-label">
                Confirm Password
              </label>
              <Input
                placeholder="Confirm Password"
                type="password"
                value={confirm_password}
                name="confirm_password"
                onChange={this.onChange}
              />
            </div>
            </div>

            <div className="mt-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                
              </div>
            </div>
            <div className="button-wrapper mt-5">
              <button
                className="btn btn-signup "
                type="button"
                onClick={this.registerUser}
              >
                Register
              </button>
            </div>

            <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
                <a href="/login" class="w-inline-block"
                  ><div class="text-align-center text-color-secondary">
                    I already have an account. Log in
                  </div></a
                >
              </div>
          </form>{" "}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { registerUser })(Registernew);
