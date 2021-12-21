import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import Card from "Card";

function Landing() {
  return (
    <Landingmain>
      <Bg>
        <Landingad>
          <IMAGE src="https://github.com/manikmmalhotra/slack-clone/blob/master/apartment%20(1)%201.png?raw=true" />
          <Adtext>
            <Span>Arihant Skylines </Span>
            <Span> 1, 2 BHKs starting at Rs. 20L+</Span>
            <BTN>LEARN MORE -&gt;</BTN>
          </Adtext>
        </Landingad>
      </Bg>
      <LandingInput>
        <InputDiv>
          <InputTab>Projects</InputTab>
          <InputTab>Resale Homes</InputTab>
          <InputTab>Rent / Lease</InputTab>
        </InputDiv>
        <InputDiv>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter Locality"
              inputProps={{ "aria-label": "Enter Locality" }}
            />
          </Paper>
          <Butn>Search</Butn>
        </InputDiv>
      </LandingInput>
      <Landingslog>
        Mumbai's Best Real Estate Cunsultant
        <br />
        <Hash>#GoodbyeHeadches</Hash>
      </Landingslog>
      <Card />
    </Landingmain>
  );
}

export default Landing;
export const Landingmain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
`;
export const Landingad = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: auto;
`;
export const Bg = styled.div`
  background: url("https://github.com/manikmmalhotra/slack-clone/blob/master/Rectangle%202.png?raw=true")
    no-repeat center center fixed;
  background-size: cover;
  width: 100%;
`;
export const IMAGE = styled.img`
  width: 40%;
`;
export const Adtext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  margin: auto;
  margin-left: 60px;
`;

export const Span = styled.span`
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 31px;
  color: #343a40;
`;
export const BTN = styled.div`
  font-style: bold;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin-top: 20px;
  color: #e85d04;
  cursor: pointer;
`;
export const LandingInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 45%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 200px;
`;
export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;
export const Butn = styled.div`
  display: flex;
  width: 140px;
  height: 40px;
  background: #e85d04;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #f8f9fa;
  cursor: pointer;
`;
export const InputTab = styled.div`
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.15px;
  color: #6c757d;
  cursor: pointer;
`;
export const Landingslog = styled.div`
  font-size: 52px;
  line-height: 50px;
  text-align: center;
  color: #495057;
  margin-top: 30px;
`;
export const Hash = styled.span`
  font-style: normal;
  font-weight: 650;
  font-size: 32px;
  text-align: center;
  color: #e85d04;
`;
