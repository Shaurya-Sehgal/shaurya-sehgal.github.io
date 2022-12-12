import React from "react";
import pfp from "../assets/pfp.png";

function Home() {
  return (
    <>
      <div className="container-fluid bg-success">
        <div className="container">
          <div className="row" style={{ minHeight: "100vh" }}>
            <div className="col-sm-6 d-flex align-items-center">
              <img src={pfp} alt="" className="rounded-circle w-100" />
            </div>
            <div className="col-sm-6 text-center d-flex align-items-center">
              <div>
                <h1>Shaurya Sehgal</h1>
                <p className="fs-3">
                  Hello! I am Shaurya Sehgal, and I'm currently a 12 year old
                  boy, who is interested in programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
