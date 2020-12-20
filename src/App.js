import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [output, setOutput] = useState("");
  var [date, setDate] = useState();
  var [userName, setUsername] = useState("");
  function nameHandler(name) {
    var userName = name.target.value;
    setUsername(userName);
  }
  function dateHandler(date) {
    var str = date.target.value;
    var date = parseInt(str.substring(0, 2), 10);

    setDate(date);
  }
  function computation() {
    var prime = true;
    if (date === 1) {
      prime = false;
    } else {
      for (i = 2; i < date; i++) {
        if (date % i === 0) {
          prime = false;
        }
      }
    }
    if (prime) {
      var output = `${userName}, you are born on a prime date.`;
      setOutput(output);
    } else {
      var output = `${userName}, you are not born on a prime date.`;
      setOutput(output);
    }
  }
  return (
    <div className="App">
      <h2>
        hello user, input your information and know if you are born on a prime
        date
      </h2>
      <input placeholder="name" onChange={nameHandler} />
      <hr />
      <input
        placeholder="date of birth in dd/mm format"
        onChange={dateHandler}
      />
      <hr />
      <button onClick={computation}>clickME!</button>
      <hr />
      <h2>{output}</h2>
    </div>
  );
}
