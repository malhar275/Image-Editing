import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { data1 } from "./Component1/Batch1";
import { data2 } from "./Component1/Batch2";
import { data3 } from "./Component1/Batch3";
import Table from "./Component1/Table";
export default function App() {
  return (
    <Router>
      <div>
        <br />
        <br />
        <Link to="/Batch1">Batch1</Link>
        <br />
        <br />
        <Link to="/Batch2">Batch2</Link>
        <br />
        <br />
        <Link to="/Batch3">Batch3</Link>
        <br />
        <br />
        <h1>Table</h1>
        <Routes>
          <Route path="/Batch1" element={<Table data={data1} />}></Route>
          <Route path="/Batch2" element={<Table data={data2} />}></Route>
          <Route path="/Batch3" element={<Table data={data3} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
// create a form that contains:
//firstname,lastname,email,password,confirm password,message,gender,city
//display the submitted values with alert box on same page and message on the next page
//batch 1,2,3
// batch 1,2,3 json rollno,name,branch
//stable
//
