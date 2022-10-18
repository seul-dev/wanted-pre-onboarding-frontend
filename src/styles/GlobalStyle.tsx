import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
    format('woff');
  font-weight: 400;
  font-style: normal;
}
:root {
  --white : ffffff;
  --blue: #284b63;
  --gray: #d9d9d9;
  --green : #3c6e71;
  --black : #353535;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  display: none;
}

body {
  font-family: 'Pretendard-Regular';
  overflow: scroll;
  font-size: 1rem;
}

`;
