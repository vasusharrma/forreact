import React from 'react';
import ReactDOM from 'react-dom/client';



const heading = React.createElement('h1' , {id:'heading'} , 'ramji vasuji');
const jsxHeading = <h1>ramji with jsx</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);