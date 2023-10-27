import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function ImageComponent(props){
//   return(
//       <img src={props.image} alt={props.name} />
//   );
// }

// function CardComponent(props){
//   return (
//     <div>
//       <ImageComponent image= {props.image} name = {props.name}/>
//       <h1>{props.name}</h1>
//     </div>
//   );
// }

//root.render(<CardComponent name = "Rohan"  image = "https://via.placeholder.com/200"/>);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function+-
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

 