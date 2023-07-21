import React from "react";

export default function index() {
  return (
    <>
      <div className="container sign-up mt-5  align-items-center">
        <div className="d-flex flex-column align-items-center gap-5">
          <img
            src="./assets/elogo.png"
            className="d-block logo"
            alt="logo"
          />

        </div>
        <form className="">
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
                value=""
              />
            </div>
          </div>
          <div className="">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value=""
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
            <button className="btn btn-signup " type="submit">
              Login
            </button>
          </div>
        </form>{" "}
      </div>
    </>
  );
}
