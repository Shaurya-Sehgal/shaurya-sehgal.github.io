import React from "react";
import picturlly from "../assets/picturally.png";
import miniTools from "../assets/mini-tools.png";
import glitchedGames from "../assets/glitchedgames.png";
import textToGo from "../assets/texttogo.png";

function Projects() {
  return (
    <>
      <div
        className="container pt-5 "
        style={{ minHeight: "100vh" }}
        id="projects"
      >
        <div className="row pt-5 d-flex justify-content-around align-items-center">
          <div className="col-8">
            <div className="row">
              <div className="col py-2">
                <div className="card m-auto" style={{ width: "18rem" }}>
                  <img src={picturlly} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Picturally</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="d-flex justify-content-">
                      <div className="w-50 px-2">
                        <a
                          target="_blank"
                          href="https://shaurya-sehgal.github.io/picturally/"
                          className="btn btn-primary w-100"
                        >
                          Visit
                        </a>
                      </div>
                      <div className="w-50 px-2">
                        <a
                          target="_blank"
                          href="https://github.com/Shaurya-Sehgal/picturally"
                          className="btn btn-primary w-100"
                        >
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col py-2">
                <div className="card m-auto" style={{ width: "18rem" }}>
                  <img src={miniTools} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mini-Tools</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="d-flex justify-content-">
                      <div className="w-50 px-2">
                        <a
                          target="_blank"
                          href="https://shaurya-sehgal.github.io/mini-tools/"
                          className="btn btn-primary w-100"
                        >
                          Visit
                        </a>
                      </div>
                      <div className="w-50 px-2">
                        <a
                          target="_blank"
                          href="https://github.com/Shaurya-Sehgal/mini-tools"
                          className="btn btn-primary w-100"
                        >
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col py-2">
                <div className="card m-auto" style={{ width: "18rem" }}>
                  <img src={glitchedGames} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Glitched Games</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="d-flex justify-content-">
                      <div className="w-50 px-2">
                        <a
                          target="_blank"
                          href="https://shaurya-sehgal.github.io/mini-tools/"
                          className="btn btn-primary w-100"
                        >
                          Visit
                        </a>
                      </div>
                      <div className="w-50 px-2">
                        <a
                          target="_blank"
                          href="https://github.com/Shaurya-Sehgal/mini-tools.git"
                          className="btn btn-primary w-100"
                        >
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col py-2">
                <div className="card m-auto" style={{ width: "18rem" }}>
                  <img src={textToGo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Text-To-Go</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="d-flex justify-content-">
                      <div className="w-50 px-2">
                        <a
                          target="_blank"
                          href="https://texttogo.netlify.app/"
                          className="btn btn-primary w-100"
                        >
                          Visit
                        </a>
                      </div>
                      <div className="w-50 px-2">
                        <a
                          target="_blank"
                          href="https://app.netlify.com/sites/texttogo/overview"
                          className="btn btn-primary w-100"
                        >
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h1 className="text-center">Projects</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
