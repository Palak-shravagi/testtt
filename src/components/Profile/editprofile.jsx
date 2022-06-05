import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Profile/editprofile.css";
// import MainScreen from "../Mainscreen/mainscreen";
function Profilescreen() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [userd, setUserData] = useState();

  const callhomelogin = async () => {
    try {
      const res = await fetch("/LoginHome", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log("data from db" + data);
      setUserData(data);

      console.log(data);
      console.log("_________________");
      console.log(userd);
      console.log(JSON.stringify(data.username));

      // console.log("so this is data " + userd.name);
      console.log("inside the console of loginhome");
      // console.log("data is printed...." + data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        //  console.log(error);
        throw error;
      }
    } catch (err) {
      // console.log(err);
      navigate("/login");
    }
    // navigate("/LoginHome");
  };

  useEffect(() => {
    callhomelogin();
  }, []);

  const edituser = async (e) => {
    e.preventDefault();

    // console.log("button clicked..");
    console.log("username:" + username);
    console.log("name :" + name);
    console.log("email :" + email);
    // console.log("res" + JSON.stringify(res));
    if (username !== "" && name !== "" && email !== "") {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      // console.log(res);
      if (res.status === 400 || !res) {
        window.alert("invalid credentials");
      } else {
        window.alert("login successfull");

        navigate("/LoginHome");
      }
    } else {
      // const { email, password } = user;
      window.alert("please fill the required data ");
    }
  };

  if (userd) {
    return (
      <>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
        rel="stylesheet" */}

        <div className="bgbody" style={{ backgroundColor: "black" }}>
          <div className="shape" />
          <div className="shape" />
        </div>
        <div className="gradient__bgg" style={{ color: "#ffffff" }}>
          <Col md={6} style={{ margin: "auto", padding: "" }}>
            <form
              className="gradient__bg"
              method="POST"
              style={{ padding: "40px" }}
            >
              <h3 style={{ margin: "20px" }}>Update Profile</h3>
              <Form.Group controlId="name">
                <Form.Label style={{ color: "#ffffff", margin: "5px" }}>
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={userd.name}
                  style={{ margin: "10px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="username">
                <Form.Label style={{ margin: "5px" }}>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={userd.username}
                  style={{ margin: "10px" }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label style={{ margin: "5px" }}>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={userd.email}
                  style={{ margin: "10px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              {/* <Form.Group controlId="password">
                <Form.Label style={{ margin: "5px" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  style={{ margin: "10px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label style={{ margin: "5px" }}>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  style={{ margin: "10px" }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group> */}
              <button
                class="btn btn-light"
                type="button"
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
                onclick={edituser}
              >
                Update
              </button>
            </form>
          </Col>
        </div>
      </>
    );
  }
}

export default Profilescreen;
