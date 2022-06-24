import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const SHeader = styled.div`
  width: 100%;
  max-width: 100%;
  height: 80px;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
const Logo = styled.div`
  font-size: 28px;
  font-weight: 800;
  a {
    color: ${mainStyle.mainColor};
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
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>mu-movie</Link>
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
