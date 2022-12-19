import React from "react";

function Contact() {
  return (
    <>
      <div className="container" id="contact">
        <div className="row">
          <div className="col text-center mt-5 pt-5">
            <h1>Contact Me</h1>
          </div>
        </div>
        <div
          style={{ minHeight: "90vh" }}
          className="row d-flex align-items-center justify-content-center"
        >
          <div className="col">
            <form
              action="https://formsubmit.co/ashish.shaurya.as@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false"></input>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="hidden"
                  name="_next"
                  value="https://shaurya-sehgal.github.io/#"
                />
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Message
                </label>
                <input
                  name="message"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
