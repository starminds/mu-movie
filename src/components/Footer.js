import styled from "styled-components";

const SFooter = styled.Footer`
  padding: 75px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #555;
`;

export const Footer = () => {
  return (
    <SFooter>
      <span>&copy; mu-movie {new Date().getFullYear()}</span>
    </SFooter>
  );
};
