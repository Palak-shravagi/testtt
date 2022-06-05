import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

import { CTA, Brand, Navbar } from "..";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "../../containers";
import axios from "axios";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";

function MyForm() {
  const [Dept, setDept] = React.useState("None");
  const [Domain, setDomain] = React.useState("None");
  const [Language, setLanguage] = React.useState("None--");

  const [Year, setYear] = React.useState(new Date().getFullYear());

  let minOffset = 0,
    maxOffset = 75;
  let thisYear = new Date().getFullYear();
  let allYears = [];
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x);
  }

  const yearList = allYears.map((x) => {
    return (
      <option style={{ color: "#000000" }} key={x}>
        {x}
      </option>
    );
  });

  async function applyonclick() {
    if (Dept === "None" || Domain === "None" || Language === "None") {
      window.alert("select dept and domain");
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          department: Dept,
          domain: Domain,
          academicYear: Year,
        })
      };
      const response = await fetch(
        "http://localhost:5000/filter",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
        rel="stylesheet"
      />

      {}
      {/* <div className="gradient__bg">
        <div className="shape" />
        <div className="shape" />
      </div > */}
      <div
        style={{
          color: "#ffffff",
          border: "1px solid rgb(138,149,158)",
          borderRadius: "5px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <form
          style={{
            padding: "40px",
            backgroundColor: "rgb(23,26,34)",
          }}
          method="POST"
        >
          <h4>Filters</h4>
          <Row style={{ marginRight: "15px" }}>
            <Form.Label>Department</Form.Label>
            <Form.Select
              onChange={(e) => setDept(e.target.value)}
              as={Col}
              aria-label="Default select example"
              style={{ margin: "15px", color: "#000000" }}
              required
            >
              <option style={{ color: "#000000" }}>Select</option>
              <option value="1" style={{ color: "#000000" }}>
                CSE
              </option>
              <option value="2" style={{ color: "#000000" }}>
                IT
              </option>
              <option value="3" style={{ color: "#000000" }}>
                Electronics
              </option>
              <option value="3" style={{ color: "#000000" }}>
                Electrical
              </option>
              <option value="3" style={{ color: "#000000" }}>
                Mechanical
              </option>
              <option value="3" style={{ color: "#000000" }}>
                Civil
              </option>
            </Form.Select>

            <Form.Label>Domain</Form.Label>
            <Form.Select
              onChange={(e) => setDomain(e.target.value)}
              as={Col}
              aria-label="Default select example"
              style={{ margin: "15px", color: "#000000" }}
              required
            >
              <option style={{ color: "#000000" }}>Select</option>
              <option value="1" style={{ color: "#000000" }}>
                Web
              </option>
              <option value="2" style={{ color: "#000000" }}>
                Android
              </option>
              <option value="3" style={{ color: "#000000" }}>
                Blockchain
              </option>
            </Form.Select>

            <Form.Label color="#fff">Languages Used</Form.Label>
            <Form.Select
              onChange={(e) => setLanguage(e.target.value)}
              as={Col}
              aria-label="Default select example"
              style={{ margin: "15px" }}
              required
            >
              <option style={{ color: "#000000" }}>Select</option>
              <option value="1" style={{ color: "#000000" }}>
                C
              </option>
              <option value="2" style={{ color: "#000000" }}>
                CPP
              </option>
              <option value="3" style={{ color: "#000000" }}>
                JAVA
              </option>
              <option value="3" style={{ color: "#000000" }}>
                PYTHON
              </option>
              <option value="3" style={{ color: "#000000" }}>
                HTML,CSS
              </option>
              <option value="3" style={{ color: "#000000" }}>
                REACT JS
              </option>
            </Form.Select>

            <Form.Label style={{ color: "#ffffff" }}>Academic-year</Form.Label>
            <Form.Select
              onChange={(e) => setYear(e.target.value)}
              aria-label="Default select example"
              style={{ margin: "15px", color: "#000000" }}
              required
            >
              {yearList}
              {}
            </Form.Select>
            {}
            <button
              class="btn btn-light"
              type="button"
              style={{
                marginLeft: "15px",
                marginRight: "10px",
                marginTop: "10px",
              }}
              onClick={applyonclick}
            >
              Apply
            </button>
          </Row>

          {}
        </form>
      </div>
    </>
  );
}

export default MyForm;
