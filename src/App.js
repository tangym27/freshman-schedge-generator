import React from "react";
import "./App.css";
import logo from "./logo.jpg";
import ScheduleGenerator from "./ScheduleGenerator";
import styled from "styled-components";
import StyledHeader from "./Header";
import StyledFooter from "./Footer";


const MainContent = styled.div`
  background-image: url("${logo}");
  height: 93vh;
  width: 100vw;
  background-size: cover;
  background-repeat: none;
  align-items: center;
`;


const App = () => {
  return (
    <div>
    <StyledHeader> ALBERTA  </StyledHeader>
      <MainContent>
      <center>
      <h1> NYU SCHEDULE GENERATOR </h1>
      </center>
        <ScheduleGenerator />
        <StyledFooter> </StyledFooter>
      </MainContent>
    </div>
  );
};

export default App;
