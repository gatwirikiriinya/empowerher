// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { resetUser } from "../../actions/authActions";
// import { appicon } from "../assets/images";
// import { Input, Preloader } from "../common";
// import Swal from "sweetalert2";

// class Reset extends Component {
//   state = {
//     username: "",
//     contact: "",
//     password: "",
//     confirm_password: "",
//     resetErrors: [],
//     preloader: "d-none",
//     authenticatedUser: {},
//   };
//   onChange = (e) => {
//     e.preventDefault();
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   componentDidMount() {
//     // console.log(this.props.auth);
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push("/");
//     }
//   }
//   reset = () => {
//     const { username, contact, password, confirm_password } = this.state;
//     if (username === "" || password === "" || contact === "") {
//       Swal.fire("Error", " No Fields Shouldn't be Empty", "error");
//     } else {
//       if (password !== confirm_password) {
//         Swal.fire("Error", "Password Don't Match!", "error");
//       } else {
//         let data = {
//           username,
//           contact,
//           password,
//         };
//         this.setState({
//           preloader: "d-block",
//         });
//         this.props.resetUser(data, this.props.history);
//       }
//     }
//   };

//   static getDerivedStateFromProps(props, state) {
//     if (props.resetErrors.length !== 0) {
//       return {
//         preloader: "d-none",
//       };
//     }
//     if (props.authenticatedUser !== state.authenticatedUser) {
//       return {
//         preloader: "d-none",
//       };
//     }
//     // return null;
//   }

//   render() {
//     const {
//       username,
//       contact,
//       password,
//       confirm_password,
//       preloader,
//     } = this.state;
//     return (
//       <div className="d-flex justify-content-center mt-5">
//         <div className="col-md-4 mt-5 border border-1 border-radius-3 rounded shadow-sm p-3 pb-5 form-wrap">
//           <div className="d-flex  justify-content-center">
//             <img src={appicon} height="72" alt="Mawingu Networks" />
//           </div>

//           <Input
//             label="Username"
//             placeholder="Enter Username"
//             type="text"
//             value={username}
//             name="username"
//             onChange={this.onChange}
//           />
//           <Input
//             label="Phone Number"
//             placeholder="Enter Phone Number"
//             type="number"
//             value={contact}
//             onChange={this.onChange}
//             name="contact"
//           />
//           <Input
//             label="Password"
//             placeholder="Enter Password"
//             type="password"
//             value={password}
//             name="password"
//             onChange={this.onChange}
//           />
//           <Input
//             label="Confirm Password"
//             placeholder="Re-enter Password"
//             type="password"
//             value={confirm_password}
//             name="confirm_password"
//             onChange={this.onChange}
//           />

//           <div className="d-grid gap-1 mt-3">
//             {preloader === "d-none" ? (
//               <button className="btn btn-primary btn-sm" onClick={this.reset}>
//                 Reset Password
//               </button>
//             ) : (
//               <div className={preloader}>
//                 <Preloader />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   resetErrors: state.auth.resetErrors,
//   authenticatedUser: state.auth.authenticatedUser,
// });

// export default connect(mapStateToProps, { resetUser })(Reset);
