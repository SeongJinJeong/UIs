import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { MdMenu, MdKeyboardTab } from "react-icons/md";

const TopUI = () => {
  const [width, setWidth] = useState(document.body.clientWidth);
  const [height, setHeight] = useState(document.body.clientHeight);
  console.log("Your device Width is ", width, height);

  return (
    <>
      <DivTop width={width}>
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
            <>
              <IconContext.Provider value={{ size: "5em" }}>
                <MenuIcon id="mobileMenuIcon" onClick={() => handleMenu()}>
                  <MdMenu />
                </MenuIcon>
              </IconContext.Provider>
              <MobileMenu height={height} />
            </>
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

const MobileMenu = props => {
  const browserHeight = props.height;
  console.log(browserHeight);
  return (
    <>
      <MobileMenuDiv id="MenuDiv" height={browserHeight}>
        <IconContext.Provider value={{ size: "5em" }}>
          <CloseIcon id="mobileMenuIcon" onClick={() => handleMenuClose()}>
            <MdKeyboardTab color="white" />
          </CloseIcon>
        </IconContext.Provider>
        <MobileMenuItem>
          <MobileMenuLink>Fuck You</MobileMenuLink>
        </MobileMenuItem>
      </MobileMenuDiv>
    </>
  );
};

const handleMenu = () => {
  const MenuIcon = document.getElementById("mobileMenuIcon");
  const Menu = document.getElementById("MenuDiv");
  MenuIcon.style.display = "none";
  Menu.style.display = "block";
  Menu.style.visibility = "visible";
};

const handleMenuClose = () => {
  const MenuIcon = document.getElementById("mobileMenuIcon");
  const Menu = document.getElementById("MenuDiv");
  MenuIcon.style.display = "flex";
  MenuIcon.style.visibility = "visible";
  Menu.style.display = "none";
};

const DivTop = styled.div`
  margin: 0 !important;
  width: 100%;
  height: 100%;
  display: block;

  padding: 10px 10px;

  border-bottom: 1px solid #9370db;
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

const Icons = styled.p`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: auto;
  margin-bottom: auto;

  float: right;
`;

const MenuIcon = styled(Icons)`
  margin-right: 1.5em;
`;

const CloseIcon = styled(Icons)`
  margin-right: 2em;
  margin-top: 0.7em;
  position: fixed;
  right: 10px;
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

const MobileMenuDiv = styled.div`
  margin: 0;

  width: 50%;
  height: ${props => `${props.height}px`};

  display: none;
  float: right;

  position: fixed;
  top: 0;
  right: 0;

  border: 1px solid black;
  border-radius: 3em 0em 0em 3em;

  background-color: #2c2c2c;
`;

const MobileMenuItem = styled.div`
  &:nth-child(2) {
    margin-top: 3em;
  }
  border-top: 1px solid gray;

  text-align: center;
`;

const MobileMenuLink = styled.a`
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default TopUI;
