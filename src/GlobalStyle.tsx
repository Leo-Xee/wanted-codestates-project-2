import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* reset */
  *{padding:0;margin:0;font:inherit;color:inherit;}
  *,::after, ::before {box-sizing:border-box;flex-shrink:0;}
  :root {line-height:1.5;overflow-wrap:break-word;tab-size:4;tab-size:4;cursor:default;-webkit-tap-highlight-color:transparent;text-size-adjust:100%;text-size-adjust:100%}
  html, body {width: 100%; height:100%; font-size: 62.5%;}
  img, picture, video, canvas, svg {display: block;max-width:100%;}
  button {cursor:pointer;background:none;border:0;}
  a {text-decoration:none}
  table {border-spacing:0;border-collapse:collapse}
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }

  * { font-family: 'Noto Sans KR', sans-serif; }

  :root {
    --color-primary: #005fcc;
    --color-blue: #07f;
    --color-white: #ffffff;
    --color-gray: #6c7a89;
    --color-gray-light: #ebebeb;
    --color-background: #fafafa;
    --color-black: #1f334a;
    --color-red: #f62459;
    --color-blue-light: rgba(0, 119, 255, 0.1);
    --color-red-light: rgba(246, 36, 89, 0.1);



    --animation-delay: 0.75s;
  }
`;

export default GlobalStyle;
