import React, { Component } from "react";
import Swal from "sweetalert2";
import { Input } from "../common";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import NavBar from "../NavBar";

class Loginnew extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginUser = () => {
    console.log("HEreee i ammm!")
    const { email, password } = this.state;

    if (email === "" || password === "") {
      Swal.fire("Error", "email or Password Should not be Empty", "error");
    } else {
      let data = {
        email,
        password,
      };
      this.props.loginUser(data, this.props.history);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <>

      <div className="container sign-up mt-5  align-items-center">
        <div className="d-flex flex-column align-items-center gap-5">
          <img src="./assets/elogo.png" className="d-block logo" alt="logo" />

        </div>
        <form className="">
          <div className="">
            <label for="email" className="form-label">
              Email
            </label>
           
              
              <Input
                placeholder="Enter your email"
                type="text"
                value={email}
                name="email"
                onChange={this.onChange}
              />
          </div>
          <div className="">
            <label for="password" className="form-label">
              Password
            </label>
            <Input
              placeholder="Enter  your password"
              type="password"
              value={password}
              name="password"
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3 mt-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>

          <div className="button-wrapper mt-5">
            <button
              className="btn btn-signup "
              type="button"
              onClick={this.loginUser}
            >
              Login
            </button>
          </div>

          <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
                <a href="/register" class="w-inline-block"
                  ><div class="text-align-center text-color-secondary">
                    Don't have an account? Sign up
                  </div></a
                >
              </div>
        </form>{" "}
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  // loginErrors: state.auth.loginErrors,
  // authenticatedUser: state.auth.authenticatedUser,
});
export default connect(mapStateToProps, { loginUser })(Loginnew);
