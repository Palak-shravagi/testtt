import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

const animatedComponents = makeAnimated();
const Countries = [
  { label: "C", value: 355 },
  { label: "CPP", value: 54 },
  { label: "JAVA", value: 43 },
  { label: "PYTHON", value: 61 },
  { label: "GO", value: 965 },
  { label: "HTML,CSS", value: 46 },
  { label: "REACT JS", value: 58 }
];



function Editproject(){
    const [Title, setTitle] = React.useState("project");
    const [Language, setLanguage] = React.useState("lang");
    const [File, setFile] = React.useState(null);
    const animatedComponents = makeAnimated();
   
    return(
<>
    
      <title>Glassmorphism login Form Tutorial in html css</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
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
      </div >
      <div className="gradient__bg" style={{  color: "#ffffff" }} >
        <Col md={6}>
        <form className="gradient__bg"  method="POST">
          <h3 style={{"margin":"20px"}}>Update Project</h3>
          <Form.Group controlId="name">
                 <Form.Label style={{color:"#ffffff","margin":"5px"}}>New Title</Form.Label>
                 <Form.Control
                  type="text"
                  placeholder="Enter new title"
                  style={{"margin":"10px"}}
                  value={Title}
                  onChange={(e) => setTitle(e.target.value)}
                ></Form.Control>
          </Form.Group>
          <Form.Group  style={{margin:"10px",color:"#000000"}} controlId="name">
          <Form.Label style={{color:"#ffffff"}}>Languages Used</Form.Label>
           <Select options={Countries} components={animatedComponents}
              isMulti />
          </Form.Group>
          {/* <Form.Select onChange={(e) => setYear(e.target.value)} aria-label="Default select example" style={{ "margin": "15px", color: "#000000" }} required >
              {Countries}
         </Form.Select> */}
            {/* <Form.Select multiple onChange={(e) => setLanguage(e.target.value)} as={Col} aria-label="Default select example" style={{ margin: "10px" }} required isMulti>
         
              <option style={{ color: "#000000" }}>Select</option>
              <option value="1" style={{ color: "#000000" }}>C</option>
              <option value="2" style={{ color: "#000000" }}>CPP</option>
              <option value="3" style={{ color: "#000000" }}>GO</option>
            </Form.Select> */}
        <Form.Group controlId="formFileMultiple" className="mb-3" >
            <Form.Label style={{color:"#ffffff","margin":"5px"}}>Upload new files related to project</Form.Label>
            <Form.Control style={{"margin":"10px"}} value={File}  onChange={(e) => setFile(e.target.files[0])} required type="file" multiple />
          </Form.Group>
    
              <button class="btn btn-light" type="button" style={{marginLeft:"10px",marginRight:"10px", marginTop:"10px"}} >Update</button>
        </form>
        </Col>
      </div>

    </>

    );
}
export default Editproject;