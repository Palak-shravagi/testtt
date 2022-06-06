import React from "react";
import "./myprojects.css";
function myprojects(obj) {
  
  // .log("props-----");
  // console.log(obj);
  return (
    <>
      <div className="main-container" style={{ marginTop: "10px" }}>
        <div className="heading">
          <h1 className="heading__title" style={{ color: "white" }}></h1>
        </div>
        <div className="cards">
          <div className="card card-1">
            <h5 className="card__title">{obj.item.title}</h5>
            <div>
              <span
                class="badge bg-light text-dark"
                style={{ marginRight: "7px" }}
              >
                {obj.item.department}
              </span>
              <span
                class="badge bg-light text-dark"
                style={{ marginRight: "7px" }}
              >
                {obj.item.guideName}
              </span>
              <span
                class="badge bg-light text-dark"
                style={{ marginRight: "7px" }}
              >
                {obj.item.domain}
              </span>
              <span
                class="badge bg-light text-dark"
                style={{ marginRight: "7px" }}
              >
                {obj.item.lang}
              </span>
              <span
                class="badge bg-light text-dark"
                style={{ marginRight: "7px" }}
              >
                {obj.item.guideName}
              </span>
              <span
                class="badge bg-light text-dark"
                style={{ marginRight: "7px" }}
              >
                {obj.item.academicYear}
              </span>
            </div>
            <br />
            <p className="card__apply">
              <a href={obj.item.files}>
                <button
                  class="btn btn-dark"
                  style={{ marginRight: "7px", marginBottom: "7px" }}
                >
                  Attachment
                </button>
              </a>

              {/* <button
                class="btn btn-dark"
                style={{ marginRight: "7px", marginBottom: "7px" }}
              ></button> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default myprojects;
