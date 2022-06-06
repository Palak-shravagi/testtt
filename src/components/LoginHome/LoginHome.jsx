import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
// import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import Rightsection from "../rightsection/Rightsection";
import TextField from "@mui/material/TextField";
// import AddIcon from '@material-ui/icons/Add';
// import Info from "./components/Information/infromation";
import Fab from "@mui/material/Fab";
import logo from "../../final-logo-01.jpg";
import { Row, Col } from "react-bootstrap";
import "./loginhome.css";
// import Filter from "../filters/filter";
import { useEffect } from "react";
import "../Profile/profile";
import Axios from "axios";
import Myprojects from "../MyProjects/myprojects";
import { ConstructionOutlined } from "@mui/icons-material";
// const router = express.Router();
// const express = require("express");
const pages = ["Home", "About us", "Contact"];
const settings = ["Profile", "My Projects", "Logout"];

function LoginHome() {
  const [Dept, setDept] = React.useState("None");
  const [Domain, setDomain] = React.useState("None");
  const [Language, setLanguage] = React.useState("None");
  const [Year, setYear] = React.useState(new Date().getFullYear());
  const [filterdata, setfilterdata] = React.useState([]);
  const [allproject, setallproject] = useState([]);
  const [userd, setUserData] = useState();
  const [search, setsearch] = useState("");
  const [searcharr, setsearcharr] = useState([]);

  useEffect(() => {
    callhomelogin();

    Axios.post("/allProjects", {}).then((response) => {
      const res = response.data;
      setallproject(res);
      // console.log(res);
    });
  }, []);
  let minOffset = 0,
    maxOffset = 75;
  let thisYear = new Date().getFullYear();
  let allYears = [];
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x);
  }

  function onclicksearch() {
    console.log("search icon clicked");
    Axios.post("/sefrchBar", {
      keyword: search,
    }).then((response) => {
      const res = response.data;
      console.log("------------");
      console.log(res);
      
    });
  }

  async function applyonclick() {
    if (Dept === "None" || Domain === "None" || Language === "None") {
      window.alert("select dept and domain");
    } else {
      // console.log("langaugae" + Language);
      Axios.post("/filter", {
        department: Dept,
        domain: Domain,
        academicYear: Year,
        Lang: Language,
      }).then((response) => {
        const res = response.data;
        console.log(res);
        // setfilterdata(res);
        // renderprojects(filterdata);
        setallproject(res);
      });
    }
  }
  const yearList = allYears.map((x) => {
    return (
      <option style={{ color: "#000000" }} key={x}>
        {x}
      </option>
    );
  });

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handlemyprojects = () => {
    navigate("/myprojects");
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleprofile = () => {
    navigate("/profile");
  };
  const handlelogout = () => {
    navigate("/");
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

  function renderprojects(data) {
    // console.log("renderfunction" + JSON.stringify(data[0]));
    let data1 = JSON.stringify(data);
    // console.log("data111111" + data1);
    let items = [];
    data.map((item, index) => {
      items.push(<Myprojects item={item} />);
    });
    return items;
    // return <Myprojects props={data} />;
  }

  if (userd && allproject) {
    return (
      <>
        <div style={{ backgroundColor: "rgb(13,17,23)" }}>
          <AppBar
            position="static"
            className=""
            style={{
              backgroundColor: "#171A22",
              marginBottom: "10px",
            }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  <img
                    style={{
                      width: "170px",
                      height: "60px",
                      marginTop: "5px",
                      marginBottom: "5px",
                      paddingBottom: "5px",
                    }}
                    src={logo}
                  />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  <img
                    style={{
                      width: "170px",
                      height: "60px",
                      marginTop: "5px",
                      marginBottom: "5px",
                      paddingBottom: "5px",
                    }}
                    src={logo}
                  />
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      {/* <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      /> */}
                      <p
                        class="circle"
                        style={{
                          width: "50px",
                          height: "50px",
                          fontSize: "27px",
                          lineHeight: "50px",
                          backgroundColor: "grey",
                        }}
                      >
                        {userd.username[0].toUpperCase()}
                      </p>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {/* {settings.map((setting) => (
                  //{" "}
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    // <Typography textAlign="center">{setting}</Typography>
                    //{" "}
                  </MenuItem> */}
                    <MenuItem onClick={handleprofile}>Profile</MenuItem>
                    <MenuItem onClick={handlemyprojects}>My Projects</MenuItem>
                    {/* <MenuItem onClick={handleCloseUserMenu}>Setting</MenuItem> */}
                    <MenuItem onClick={handlelogout}>Log out</MenuItem>
                    {/* ))} */}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <Row
            style={{
              backgroundColor: "rgb(13,17,23)",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <Col md={2}>
              {/* <Box width={20} component="span" m={1}>
              <div width="20">
                <Col>
                  <Button
                    style={{ marginLeft: "200px" }}
                    onClick={() => navigate("/info")}
                    variant="contained"
                    color="primary"
                  >
                    Add Project
                  </Button>
                </Col>
              </div>
            </Box> */}

              <div
                style={{
                  color: "#ffffff",
                  border: "1px solid rgb(138,149,158)",
                  borderRadius: "5px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <div
                  style={{
                    padding: "30px",
                    backgroundColor: "rgb(23,26,34)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    // alignContent: "center",
                  }}
                  className="d-flex d-lg-block flex-items-center"
                >
                  <div class="circle">{userd.username[0].toUpperCase()}</div>

                  <br />

                  <div>{userd.username}</div>
                  <br />
                  <div>
                    <button
                      style={{ fontSize: "15px" }}
                      onClick={() => navigate("/info")}
                      className="btn btn-success btn-sm"
                    >
                      <i
                        className="fa fa-plus"
                        style={{ fontSize: "14px" }}
                      ></i>{" "}
                      Add Project
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            {/* section in between the porject and filter tab */}
            <Col md={7}>
              <div class="input-group mb-3">
                <input
                  type="text"
                  style={{ backgroundColor: "rgb(13,17,23)", color: "white" }}
                  class="form-control input-text"
                  placeholder="Type here to search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-lg"
                    type="submit"
                    onClick={onclicksearch}
                  >
                    <i class="fa fa-search"></i>
                  </button>{" "}
                </div>
              </div>

              {renderprojects(allproject)}
            </Col>
            <Col md={3} style={{ paddingRight: "0px" }}>
              {/* <Filter /> */}
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
                      required
                      onChange={(e) => {
                        setDept(e.target.value);
                      }}
                      as={Col}
                      aria-label="Default select example"
                      style={{ margin: "15px", color: "#000000" }}
                      custom
                    >
                      <option style={{ color: "#000000" }}>Select</option>
                      <option value="CSE" style={{ color: "#000000" }}>
                        CSE
                      </option>
                      <option value="IT" style={{ color: "#000000" }}>
                        IT
                      </option>
                      <option value="Electronics" style={{ color: "#000000" }}>
                        Electronics
                      </option>
                      <option value="Electrical" style={{ color: "#000000" }}>
                        Electrical
                      </option>
                      <option value="Mechanical" style={{ color: "#000000" }}>
                        Mechanical
                      </option>
                      <option value="Civil" style={{ color: "#000000" }}>
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
                      <option value="Web" style={{ color: "#000000" }}>
                        Web
                      </option>
                      <option value="Android" style={{ color: "#000000" }}>
                        Android
                      </option>
                      <option value="Blockchain" style={{ color: "#000000" }}>
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
                      <option value="C" style={{ color: "#000000" }}>
                        C
                      </option>
                      <option value="CPP" style={{ color: "#000000" }}>
                        CPP
                      </option>
                      <option value="JAVA" style={{ color: "#000000" }}>
                        JAVA
                      </option>
                      <option value="PYTHON" style={{ color: "#000000" }}>
                        PYTHON
                      </option>
                      <option value="HTML,CSS" style={{ color: "#000000" }}>
                        HTML,CSS
                      </option>
                      <option value="REACT JS" style={{ color: "#000000" }}>
                        REACT JS
                      </option>
                    </Form.Select>

                    <Form.Label style={{ color: "#ffffff" }}>
                      Academic-year
                    </Form.Label>
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
            </Col>
          </Row>
          {/* <Box width={20} component="span" m={1} >
          <div width="20">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Button onClick={() => navigate("/info")} variant="contained" color="primary" >Add Project</Button>
            
            </div>          

        </Box> */}

          {/* <Container maxWidth="sm"  >
            
        </Container> */}
        </div>
      </>
    );
  }
}

export default LoginHome;
