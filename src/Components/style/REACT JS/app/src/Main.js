import React, { useState } from "react";

// import Shop from "./Shop";
// import Contact from './Contact';
// import Nopage from './Nopage';

export default function Main() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    gender: "",
    city: "",
    message: "",
  });
  function handlechange(e) {
    e.preventDefault();
    const ere = /^[A-Za-z0-9]+@[A-Za-z]+.[A-Za-z]{2,3}/
    const pre = /^[A-Za-z0-9]{8,}$/
    if (data.pass !== e.target.cpass.value) alert("Password does not match");
    if(!ere.test(data.email)) alert("Invalid Email")
    if(!pre.test(data.pass)) alert("Invalid Password")
    else
      alert(
        `FirstName: ${data.fname}\nLastName: ${data.lname}\nEmail:${data.email}\nMessage:${data.message}`
      );
      localStorage.setItem('message',data.message)
      window.location.pathname="/home"
  }
  return (
    <div>
      <form onSubmit={handlechange}>
        <label>FirstName:</label>
        <input
          type="text"
          name="fname"
          value={data.fname}
          onChange={(e) => setData({ ...data, fname: e.target.value })}
        />
        <br /><br />
        <label>LastName:</label>
        <input
          type="text"
          name="lname"
          value={data.lname}
          onChange={(e) => setData({ ...data, lname: e.target.value })}
        />
        <br /><br />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br /><br />
        <label>Password:</label>
        <input
          type="password"
          name="pass"
          value={data.pass}
          onChange={(e) => setData({ ...data, pass: e.target.value })}
        />
        <br /><br />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="cpass"
          value={data.cpass}
          onChange={(e) => setData({ ...data, cpass: e.target.value })}
        />
        <br /><br />
        <label>Messgae:</label>
        <textarea
          name="message"
          cols="5"
          rows="5"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        ></textarea>
        <br /><br />
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        ></input>
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        ></input>
        Female
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
