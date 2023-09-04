import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Router> */}
//       {/* <ListProfessional /> */}
//       {/* <RegisterProfessional /> */}
//       <App />
//     {/* </Router> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  // <Router>
     <App />
  // </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
