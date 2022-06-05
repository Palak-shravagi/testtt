import React from "react";
import "./myprojects.css";
function myprojects() {
  return (
    <>
      <div className="main-container">
        <div className="heading">
          <h1 className="heading__title" style={{ color: "white" }}>
            My Projects
          </h1>
        </div>
        <div className="cards">
          <div className="card card-1">
            <h5 className="card__title">Lorem ipsum</h5>
            <div>
              <span
                class="badge bg-light text-dark"
                style={{ marginRight: "7px" }}
              >
                React
              </span>
              <span
                class="badge bg-light text-dark"
                style={{ marginRight: "7px" }}
              >
                Nodejs
              </span>
              <span
                class="badge bg-light text-dark"
                style={{ marginRight: "7px" }}
              >
                express
              </span>
              <span
                class="badge bg-light text-dark"
                style={{ marginRight: "7px" }}
              >
                mongodb
              </span>
            </div>
            <br />
            <p className="card__apply">
              <button
                class="btn btn-dark"
                style={{ marginRight: "7px", marginBottom: "7px" }}
              >
                Lorem
              </button>
              <button
                class="btn btn-dark"
                style={{ marginRight: "7px", marginBottom: "7px" }}
              >
                Lorem
              </button>
              <button
                class="btn btn-dark"
                style={{ marginRight: "7px", marginBottom: "7px" }}
              >
                Lorem
              </button>
              <button
                class="btn btn-dark"
                style={{ marginRight: "7px", marginBottom: "7px" }}
              >
                Lorem, ipsum dolor.
              </button>
              <button
                class="btn btn-dark"
                style={{ marginRight: "7px", marginBottom: "7px" }}
              >
                Lorem
              </button>
              <button
                class="btn btn-dark"
                style={{ marginRight: "7px", marginBottom: "7px" }}
              >
                Lorem
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default myprojects;
