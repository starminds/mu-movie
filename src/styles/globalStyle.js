import { createGlobalStyle } from "styled-components";
import reset from "styled-react";

export const mainStyle = {
  bgcolor: "#1d1d1d",
  color: "white",
  mainColor: "red",
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
    }    

    a{
        text-decoration: none;
        color:white
    }
    `;
