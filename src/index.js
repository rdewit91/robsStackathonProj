import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux'; 
import App from './Apps/App'
import { BrowserRouter as Router } from 'react-router-dom';

const Main = ()=> {
  return (
    // <div>
    //   <h1>Front End</h1>
    // </div>
    <div>
      {/* <Provider> */}
        <Router>
          <App />
        </Router>
      {/* </Provider> */}
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<Main />);
