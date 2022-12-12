import React from "react";
import cwPerry from "../assets/C.W. Perry School.png";
import fareview from "../assets/Fareview School.png";
import bridleWood from "../assets/BridleWood School.png";

function Education() {
  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center"
        id="education"
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <h1>Education</h1>
        </div>
        <div className="row">
          <div className="col-md-6 m-auto py-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={fareview}
                    className="img-fluid rounded-start w-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">C.W. Perry School</h5>
                    <p className="card-text">
                      I started going to C.W. Perry School from grade 5 to the
                      present and I plan on staying there till grade 8.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">2019 - Present</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col-md-6 m-auto py-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={cwPerry}
                    className="img-fluid rounded-start w-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Fairview School</h5>
                    <p className="card-text">
                      I started going to Fairview School from grade 4 to grade
                      5.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">2018 - 2019</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          <div className="col-md-6 m-auto py-2">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={bridleWood}
                    className="img-fluid rounded-start w-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Bridlewood School</h5>
                    <p className="card-text">
                      I started going to Bridlewood School from Kindergarten to
                      grade 3.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">2015 - 2018</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
