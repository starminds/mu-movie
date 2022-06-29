import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const SHeader = styled.div`
  width: 100%;
  max-width: 100%;
  height: 80px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  transition: 0.5s;
  background-color: ${(props) => props.bgcolor};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;
const Logo = styled.div`
  font-size: 28px;
  font-weight: 800;
  a {
    color: ${mainStyle.mainColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;
const MenWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.div`
  margin-left: 100px;
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }
`;

export const Header = () => {
  const [bg, setBg] = useState("");

  const handleScroll = () => {
    const sct = window.pageYOffset;
    if (sct > 500) {
      setBg("#1d1d1d");
    } else {
      setBg("transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <SHeader bgcolor={bg}>
      <Logo>
        <Link to={"/"}>mumovie</Link>
      </Logo>

      <MenWrap>
        <Menu>
          <Link to={"/"}>Home</Link>
        </Menu>
        <Menu>
          <Link to={"/"}>Detail</Link>
        </Menu>
        <Menu>
          <Link to={"/"}>Search</Link>
        </Menu>
        <Menu>
          <Link to={"/"}>NotFound</Link>
        </Menu>
      </MenWrap>
    </SHeader>
  );
};
