import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './Counter' ;
import Counternew from './Counternew'


// var x=setInterval(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <Counter />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
  
// },1000)


  ReactDOM.render(
    <React.StrictMode>
      <Counternew />
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
