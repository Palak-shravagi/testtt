import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  // let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    college: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    console.log("this is postdata mthod");

    const { name, username, email, phone, college, password, cpassword } = user;
    console.log("user:" + JSON.stringify(user));
    if (
      name === "" ||
      username === "" ||
      email === "" ||
      phone === "" ||
      college === "" ||
      password === "" ||
      cpassword === ""
    ) {
      window.alert("please fill the required data ");
    } else {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          phone,
          college,
          password,
          cpassword,
        }),
      });

      const data = await res.json();
      console.log("data:" + JSON.stringify(data));
      if (data.status === 422 || !data) {
        window.alert("invalid registragtion");
      } else {
        window.alert("registration successfull");

        navigate("/login");
      }
    }
  };

  return (
    <div>
      {" "}
      <div>
        {/* Design by foolishdeveloper.com */}
        <title></title>
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
              "\n      ,\n:before,\n*:after{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    background-color: #080710;\n}\n.background{\n    width: 430px;\n    height: 520px;\n    position: absolute;\n    transform: translate(-50%,-50%);\n    left: 50%;\n    top: 50%;\n}\n.background .shape{\n    height: 200px;\n    width: 200px;\n    position: absolute;\n    border-radius: 50%;\n}\n.shape:first-child{\n    background: linear-gradient(\n        #1845ad,\n        #23a2f6\n    );\n    left: -80px;\n    top: -80px;\n}\n.shape:last-child{\n    background: linear-gradient(\n        to right,\n        #ff512f,\n        #f09819\n    );\n    right: -30px;\n    bottom: -80px;\n}\nform{\n    height: auto;\n    width: 600px;\n    background-color: rgba(255,255,255,0.13);\n    position: absolute;\n    transform: translate(-50%,-50%);\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    backdrop-filter: blur(10px);\n    border: 2px solid rgba(255,255,255,0.1);\n    box-shadow: 0 0 40px rgba(8,7,16,0.6);\n    padding: 50px 35px;\n}\nform *{\n    font-family: 'Poppins',sans-serif;\n    color: #ffffff;\n    letter-spacing: 0.5px;\n    outline: none;\n    border: none;\n}\nform h3{\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 42px;\n    text-align: center;\n}\n\nlabel{\n    display: block;\n    margin-top: 30px;\n    font-size: 16px;\n    font-weight: 500;\n}\ninput{\n    display: block;\n    height: 50px;\n    width: 100%;\n    background-color: rgba(255,255,255,0.07);\n    border-radius: 3px;\n    padding: 0 10px;\n    margin-top: 8px;\n    font-size: 14px;\n    font-weight: 300;\n}\n: :placeholder{\n    color: #e5e5e5;\n}\nbutton{\n    margin-top: 50px;\n    width: 100%;\n    background-color: #ffffff;\n    color: #080710;\n    padding: 15px 0;\n    font-size: 18px;\n    font-weight: 600;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.social{\n  margin-top: 30px;\n  display: flex;\n}\n.social div{\n  background: red;\n  width: 150px;\n  border-radius: 3px;\n  padding: 5px 10px 10px 5px;\n  background-color: rgba(255,255,255,0.27);\n  color: #eaf0fb;\n  text-align: center;\n}\n.social div:hover{\n  background-color: rgba(255,255,255,0.47);\n}\n.social .fb{\n  margin-left: 25px;\n}\n.social i{\n  margin-right: 4px;\n}\n\n    ",
          }}
        />
        <div></div>

        <form className="gradient__bg" method="POST">
          <h3>Register</h3>
          {/* <label htmlFor="username">Name</label> */}\
          <input
            type="text"
            value={user.name}
            onChange={handleInputs}
            autoComplete="off"
            name="name"
            placeholder="name"
            id="name"
            required="required"
          />
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="text"
            value={user.username}
            onChange={handleInputs}
            autoComplete="off"
            name="username"
            placeholder="username"
            id="username"
            required="required"
          />
          {/* <label htmlFor="username">Email</label> */}
          <input
            type="email"
            value={user.email}
            onChange={handleInputs}
            autoComplete="off"
            name="email"
            placeholder="email"
            id="email"
            required="required"
          />
          {/* <label htmlFor="username">Phone-Number</label> */}
          <input
            type="text"
            value={user.phone}
            onChange={handleInputs}
            autoComplete="off"
            name="phone"
            placeholder="phone-number"
            id="pnumber"
            required
          />
          {/* <label htmlFor="username">College</label> */}
          <input
            type="text"
            value={user.college}
            onChange={handleInputs}
            autoComplete="off"
            name="college"
            placeholder="College"
            id="college"
            required
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            value={user.password}
            onChange={handleInputs}
            autoComplete="off"
            name="password"
            placeholder="password"
            id="password"
            required
          />
          {/* <label htmlFor="password"> Confirm password</label> */}
          <input
            type="password"
            value={user.cpassword}
            onChange={handleInputs}
            autoComplete="off"
            name="cpassword"
            placeholder="confirm password"
            id="cpassword"
            required
          />
          <button onClick={PostData} type="submit" value="register">
            Register
          </button>
          <br />
          <br />
          <p onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
            {" "}
            Aready register ? sign in{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;