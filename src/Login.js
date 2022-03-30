import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Quiz from "./Quiz";


function Login() {
  const [Fuser, setUser] = useState("");
  const [Luser, setLast] = useState("");
  const [userfirstName, setUserFirst] = useState(false);
  const [userlastName, setUserLast] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  console.log(isDisabled)

  
  function loginHandle(e) {
    e.preventDefault();
  }

  // condition for firstName
  function firstName(e) {
    let Fname = e.target.value;
    if (Fname.length < 3 || Fname.length > 13) {
      setUserFirst(true);
    } else {
      setUserFirst(false);
    }
    setUser(Fname);
  }

  // condition for lastName
  function lastName(e) {
    let Lname = e.target.value;
    if (Lname.length < 3 || Lname.length > 25) {
      setUserLast(true);
    } else {
      setUserLast(false);
    }
    setLast(Lname);
  }

  // checkBox and button command
  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return canBeSubmitted();
  };

  function handleClick(){
    navigate('./quiz')
  }

  return (

    <div className="login-page">
      <div className="form_bg">
        <h1 className="name">Quiz Game</h1>
        <form onSubmit={loginHandle}>
          <input
            className="input"
            type="text"
            value = {Fuser}
            placeholder="Enter First Name"
            onChange={firstName}
          />
    
          {userfirstName ? (
            <p>length should be greater than 3 and less than 13</p>
          ) : (
            ""
          )}
          <br /> <br />
          <input
            className="input"
            type="text"
            placeholder="Enter Last Name"
            onChange={lastName}
            value={Luser}
          />
          
          {userlastName ? (
            <p>length should be greater than 3 and less than 25</p>
          ) : (
            ""
          )}
          <br /> <br />
          <div className="checkbox">
            <input type="checkbox" onClick={onCheckboxClick} />
            <span>Are you ready to take the quiz?</span>
          </div>
          <br /> <br />
          <button type="submit" disabled={isDisabled} className="btn" onClick={handleClick}>Start Game</button>
          
        </form>
      </div>
    </div>
  );
}

export default Login;


