import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Profile/profile.css";
import "../Profile/editprofile";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import MainScreen from "../Mainscreen/mainscreen";
function Profilescreen() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleditbtn = () => {
    navigate("/editprofile");
  };
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
  if (userd) {
    return (
      <>
        <section className="bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-4 mb-sm-5">
                <div className="card card-style1 border-0">
                  <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-4 mb-lg-0">
                        <div>
                          <div
                            class="circle"
                            style={
                              {
                                // width: "300px",
                                // height: "300px",
                                // borderRadius: "50%",
                                // fontSize: "90px",
                                // fontFamily: "roboto, arial",
                                // color: "white",
                                // lineHeight: "280px",
                                // textAlign: "center",
                                // backgrounColor: "grey",
                                // /*Align div in centre of page*/
                                // margin: "auto",
                              }
                            }
                          >
                            {userd.username[0].toUpperCase()}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 px-xl-10">
                        <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                          <h4 className="h2 text-white mb-0">{userd.name}</h4>
                          <span className="text-primary"></span>
                        </div>
                        <ul className="list-unstyled mb-1-9">
                          <li className="mb-2 mb-xl-3 display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              Username :
                            </span>{" "}
                            {userd.username}
                          </li>
                          <li className="mb-2 mb-xl-3 display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              Email :
                            </span>{" "}
                            {userd.email}
                          </li>
                          <li className="mb-2 mb-xl-3 display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              phone :
                            </span>{" "}
                            {userd.phone}
                          </li>
                          <li className="mb-2 mb-xl-3 display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600">
                              College :
                            </span>{" "}
                            {userd.college}
                          </li>
                          <li className="display-28">
                            <span className="display-26 text-secondary me-2 font-weight-600"></span>{" "}
                          </li>
                        </ul>
                        <button
                          className="btn btn-light"
                          onClick={handleditbtn}
                        >
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <title>Glassmorphism login Form Tutorial in html css</title> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="gradient__bg">
        <div className="shape" />
        <div className="shape" />
      </div>
      <div className="gradient__bg" style={{ color: "#ffffff" }}>
        <Col md={6}>
          <form className="gradient__bg" method="POST">
            <h3 style={{ margin: "20px" }}>Update Profile</h3>
            <Form.Group controlId="name">
              <Form.Label style={{ color: "#ffffff", margin: "5px" }}>
                Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                style={{ margin: "10px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label style={{ margin: "5px" }}>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                style={{ margin: "10px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
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
            </Form.Group>

            {/* <Form.Group controlId="pic">
                 <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                  // onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group> */}

        {/* <button
              class="btn btn-light"
              type="button"
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "10px",
              }}
            >
              Update
            </button>
          </form>
        </Col>
            </div> */}
      </>
    );
  }
}

// return (

//     <div style={{color: "red"}}>
//       <Row >
//         <Col md={6}>
//           <Form >
//             {/* {loading && <Loading />}
//             {success && (
//               <ErrorMessage variant="success">
//                 Updated Successfully
//               </ErrorMessage>
//             )} */}
//             {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
//             <Form.Group controlId="name">
//               <Form.Label style={{color:"#ffffff"}}>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Name"
//                 // value={name}
//                 // onChange={(e) => setName(e.target.value)}
//               ></Form.Control>
//             </Form.Group>
//             <Form.Group controlId="email">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter Email"
//                 // value={email}
//                 // onChange={(e) => setEmail(e.target.value)}
//               ></Form.Control>
//             </Form.Group>
//             <Form.Group controlId="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter Password"
//                 // value={password}
//                 // onChange={(e) => setPassword(e.target.value)}
//               ></Form.Control>
//             </Form.Group>
//             <Form.Group controlId="confirmPassword">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm Password"
//                 // value={confirmPassword}
//                 // onChange={(e) => setConfirmPassword(e.target.value)}
//               ></Form.Control>
//             </Form.Group>{" "}
//             {/* {picMessage && (
//               <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
//             )} */}
//             <Form.Group controlId="pic">
//               <Form.Label>Change Profile Picture</Form.Label>
//               <Form.File
//                 // onChange={(e) => postDetails(e.target.files[0])}
//                 id="custom-file"
//                 type="image/png"
//                 label="Upload Profile Picture"
//                 custom
//               />
//             </Form.Group>
//             <Button type="submit" varient="primary">
//               Update
//             </Button>
//           </Form>
//         </Col>
//         {/* <Col
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img src={pic}
//           // alt={name}
//           className="profilePic" />
//         </Col> */}
//       </Row>
//     </div>

// );

export default Profilescreen;
