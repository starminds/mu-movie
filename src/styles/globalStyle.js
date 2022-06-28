import { createGlobalStyle } from "styled-components";
import reset from "styled-react";

export const mainStyle = {
  bgcolor: "#1d1d1d",
  color: "white",
  mainColor: "red",
  padding: "0 80px",
  moPadding: "0 20px",
};
export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border=box;
    }

    body{
        font-family: "Noto sans KR" , sans-serif;
        background-color: ${mainStyle.bgcolor};
        color: ${mainStyle.color};
        letter-spacing: -1px;
        word-break: keep-all;
    }    

    a{
        text-decoration: none;
        color:white
    }
    `;
