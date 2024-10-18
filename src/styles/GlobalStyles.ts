import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
    html, body {
        font-size: 10px;
        max-width: 600px;
        min-width: 320px;
        min-height: calc(var(--vh, 1vh) * 100);
        background-color: #fff;
        margin: 0 auto;
    }
    button {
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    input {
        margin: 0;
        outline: none;
    }

    &.sigCanvas {
    width: 100%;
    height: 216px;
    background-color: #f5f5f5;
    border-radius: 3px;
    }
`;

export default GlobalStyles;
