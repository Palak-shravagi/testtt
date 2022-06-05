// import { WindowSharp } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();

    // console.log("button clicked..");
    console.log("username:" + username);
    console.log("password :" + password);
    // console.log("res" + JSON.stringify(res));
    if (username !== "" && password !== "") {
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

  return (
    <div>
      <div style={{ paddingTop: "400px" }}>
        {/* Design by foolishdeveloper.com */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
        <style
          media="screen"
          dangerouslySetInnerHTML={{
            __html:
              "\n      ,\n:before,\n*:after{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    background-color: #080710;\n}\n.background{\n    width: 430px;\n    height: 520px;\n    position: absolute;\n    transform: translate(-50%,-50%);\n    left: 50%;\n    top: 50%;\n}\n.background .shape{\n    height: 200px;\n    width: 200px;\n    position: absolute;\n    border-radius: 50%;\n}\n.shape:first-child{\n    background: linear-gradient(\n        #1845ad,\n        #23a2f6\n    );\n    left: -80px;\n    top: -80px;\n}\n.shape:last-child{\n    background: linear-gradient(\n        to right,\n        #ff512f,\n        #f09819\n    );\n    right: -30px;\n    bottom: -80px;\n}\nform{\n    height: auto;\n    width: 600px;\n    background-color: rgba(255,255,255,0.13);\n    position: absolute;\n    transform: translate(-50%,-50%);\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    backdrop-filter: blur(10px);\n    border: 2px solid rgba(255,255,255,0.1);\n    box-shadow: 0 0 40px rgba(8,7,16,0.6);\n    padding: 50px 35px;\n}\nform *{\n    font-family: 'Poppins',sans-serif;\n    color: #ffffff;\n    letter-spacing: 0.5px;\n    outline: none;\n    border: none;\n}\nform h3{\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 42px;\n    text-align: center;\n}\n\nlabel{\n    display: block;\n    margin-top: 30px;\n    font-size: 16px;\n    font-weight: 500;\n}\ninput{\n    display: block;\n    height: 50px;\n    width: 100%;\n    background-color: rgba(255,255,255,0.07);\n    border-radius: 3px;\n    padding: 0 10px;\n    margin-top: 8px;\n    font-size: 14px;\n    font-weight: 300;\n}\n::placeholder{\n    color: #e5e5e5;\n}\nbutton{\n    margin-top: 50px;\n    width: 100%;\n    background-color: #ffffff;\n    color: #080710;\n    padding: 15px 0;\n    font-size: 18px;\n    font-weight: 600;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.social{\n  margin-top: 30px;\n  display: flex;\n}\n.social div{\n  background: red;\n  width: 150px;\n  border-radius: 3px;\n  padding: 5px 10px 10px 5px;\n  background-color: rgba(255,255,255,0.27);\n  color: #eaf0fb;\n  text-align: center;\n}\n.social div:hover{\n  background-color: rgba(255,255,255,0.47);\n}\n.social .fb{\n  margin-left: 25px;\n}\n.social i{\n  margin-right: 4px;\n}\n\n    ",
          }}
        />
        <div>
          <div className="shape" />
          <div className="shape" />
        </div>
        <form className="gradient__bg" style={{ "padding-top": "70px" }}>
          <h3 style={{ "margin-bottom": "35px" }}>Login</h3>
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            id="username"
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            id="password"
          />
          <button type="submit" onClick={userLogin}>
            Login
          </button>
          <br />
          <br />
          <p style={{ cursor: "pointer" }}>forget password ?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;