import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";

const TopUI = () => {
  const [width, setWidth] = useState(document.body.clientWidth);
  console.log(width);

  return (
    <>
      <DivTop>
        <Container>
          <Title href="#">Title</Title>
          {width < 770 ? null : (
            <>
              <Link href="#">content 1</Link>
              <Link href="#">content 2</Link>
              <Link href="#">content 3</Link>
              <Link href="#">content 4</Link>
            </>
          )}
          {width < 770 ? (
            <IconContext.Provider value={{ size: "5em" }}>
              <Icons>
                <MdMenu />
              </Icons>
            </IconContext.Provider>
          ) : (
            <>
              <LoginUi>
                <LoginLink href="#">Login</LoginLink>
                <LoginLink href="#">Logout</LoginLink>
              </LoginUi>
            </>
          )}
        </Container>
      </DivTop>
    </>
  );
};

const mobileMenuHandle = () => {
  return (
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
        &times;
      </a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
};

const DivTop = styled.div`
  margin: 0 !important;
  width: 100%;
  height: 100%;
  display: block;

  padding: 10px 10px;

  border-bottom: 1px solid black;
  background-color: #9370db;
`;

const Container = styled.div`
  margin-left: 10%;
`;

const Link = styled.a`
  margin-right: 5px;
  margin-left: 10px;

  text-align: center;
  text-decoration: none;

  font-weight: bold;

  color: #db7093;
  &:hover {
    color: #ffc0cb;
  }
`;

const Title = styled(Link)`
  font-size: 30px;
  color: white;
  margin-right: 2em;
  margin-left: 0px;
`;

const Icons = styled.span`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: auto;
  margin-bottom: auto;

  float: right;
  margin-right: 1em;
`;

const LoginUi = styled.div`
  display: inline;
  float: right;

  margin-right: 1em;
  margin-top: 0.7em;
`;

const LoginLink = styled(Link)`
  color: #2c2c2c;
  font-size: 15px;
  text-transform: uppercase;

  text-decoration: none;
`;

export default TopUI;
