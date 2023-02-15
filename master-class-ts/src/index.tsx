import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { lightTheme, darkTheme } from './theme';

const rootElement = document.getElementById('root');
if(!rootElement) throw new Error('Falid to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render( 
  <React.StrictMode>  
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
//ThemeProvider는 styled-components로부터 오는 하나의 컴포넌트다.
