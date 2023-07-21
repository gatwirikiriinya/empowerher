import React from "react";

export default function index() {
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
        <form className="" >
          <div className="">
            <label for="firstname" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              value=""
              required
            />
          </div>
          <div className="">
            <label for="lastname" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              value=""
              required
            />
          </div>
          <div className="">
            <label for="username" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="inputGroupPrepend"
                required
              />
            </div>
          </div>
          <div className="">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
            />
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
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="button-wrapper mt-5">
            <button className="btn btn-signup " type="submit">
              Register
            </button>
          </div>
        </form>{" "}
      </div>
    </>
  );
}
