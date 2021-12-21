import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Headnav>
      <Headleft>
        <img src="https://github.com/manikmmalhotra/slack-clone/blob/master/logo.png?raw=true" />
        <Texty>FOR BUYERS</Texty>
        <Texty>FOR TENANTS</Texty>
        <Texty>ABOUT</Texty>
        <Texty>CONTACT US</Texty>
      </Headleft>
      <Headright>
        <Butn>POST PROPERTY</Butn>
        <Texty>LOGIN</Texty>
      </Headright>
    </Headnav>
  );
}

export default Header;

export const Headnav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 40px auto;
`;
export const Headleft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
`;
export const Headright = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`;
export const Butn = styled.div`
  display: flex;
  width: 180px;
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
export const Texty = styled.div`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
  letter-spacing: 1.25px;
  color: #343a40;

  margin: 10px;
`;
