import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    body {
        background-color: rgba(0,0,0, 0.9);
        color: #FFFF
    }
    

`;
