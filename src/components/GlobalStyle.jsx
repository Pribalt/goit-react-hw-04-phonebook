import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }

          button {
            margin: 0 auto;
            cursor: pointer;
            border: none;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          a {
            text-decoration: none;
            color: inherit;
            cursor: pointer;
          }
`;
