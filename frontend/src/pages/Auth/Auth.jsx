import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const [isSignUp, setSignUp] = useState(true);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [confirmPassCheck, setConfirmPassCheck] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      password === confirmPass
        ? dispatch(
            signUp({
              firstName: "",
              lastName: "",
              userName: "",
              password: "",
              confirmPass: "",
              confirmPassCheck: "",
            })
          )
        : setConfirmPassCheck(false);
    } else {
      dispatch(
        logIn({
          Name: "",
          lastName: "",
          userName: "",
          password: "",
          confirmPass: "",
          confirmPassCheck: "",
        })
      );
    }
  };

  const resetForm = () => {
    setConfirmPassCheck(true);
    setFirstName("");
    setLastName("");
    setUserName("");
    setPassword("");
    setConfirmPass("");
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Enjoy Life</h1>
          <h6>Expolre Your Life With Celebrity</h6>
        </div>
      </div>

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="First Name"
                className="infoInput"
                name="firstname"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
              />
            </div>
          )}

          <div>
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="infoInput"
              name="username"
              placeholder="Username"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="infoInput"
              name="password"
              placeholder="Password"
            />
            {isSignUp && (
              <input
                type="password"
                value={confirmPass}
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
              />
            )}
          </div>
          <span
            style={{
              display: confirmPassCheck ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "15px", cursor: "pointer" }}
              onClick={() => {
                setSignUp(!isSignUp);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : " Don't have an account Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Signup" : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};
// function LogIn() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Log In</h3>

//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             className="infoInput"
//             name="username"
//           />
//         </div>

//         <div>
//           <input
//             type="password"
//             className="infoInput"
//             placeholder="Password"
//             name="password"
//           />
//         </div>

//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Don't have an account Sign up
//           </span>
//           <button className="button infoButton">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }
// function SignUp() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Sign up</h3>

//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstname"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="infoInput"
//             name="lastname"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Usernames"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />
//           <input
//             type="text"
//             className="infoInput"
//             name="confirmpass"
//             placeholder="Confirm Password"
//           />
//         </div>

//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account. Login!
//           </span>
//         </div>
//         <button className="button infoButton" type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }

export default Auth;
