import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const Section = styled.section`
  /* margin-top: 150px; */
  padding: ${mainStyle.padding};
`;

export const Container = ({ children }) => {
  return <Section>{children}</Section>;
};
