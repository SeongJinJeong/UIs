import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";

const TopUI = () => {
  const [width, setWidth] = useState(document.body.clientWidth);
  const [isDevice, setIsDevice] = useState("");
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
            <IconContext.Provider value={{ size: "3em" }}>
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
  margin-left: 15%;
`;

const Link = styled.a`
  margin-right: 5px;
  margin-left: 10px;

  text-align: center;
  text-decoration: none;

  color: #db7093;
`;

const Title = styled(Link)`
  font-size: 30px;
  color: white;
  margin-right: 20px;
  margin-left: 0px;
`;

const Icons = styled.span`
  width: 30px;
  height: 30px;

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
