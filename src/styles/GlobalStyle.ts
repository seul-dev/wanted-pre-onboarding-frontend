import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

:root {
  --white : #ffffff;
  --blue: #284b63;
  --gray: #d9d9d9;
  --green : #3c6e71;
  --black : #353535;
  --red: #bc4749;
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

  overflow: scroll;
  font-size: 1rem;
}

`;
