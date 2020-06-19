import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import StyledInput from "./Input";

function MajorForm() {
  const [major, setMajor] = useState("nothing");
  const [search, setSearch] = useState("nothing");

  function handleChange(event) {
    event.preventDefault();
    setMajor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("You choose " + major + ". You searched for " + search + ".");
  }

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleChange}>
        <option value="nothing">Choose a major</option>
        <option value="Computer Science">CS</option>
        <option value="English">Eng</option>
        <option value="Chemistry">Chem</option>
        <option value="Math">Math</option>
      </select>
      <p>You chose {major}.</p>
      <StyledInput
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <Button>Submit</Button>
    </form>
  );
}

export default MajorForm;
