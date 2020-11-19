import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake(props){
  return (
    <div>{props.name}</div>
  )
}

function App(){
  return (<div>
    <Lake name="Lake Tahoe" />
  </div>);
}
ReactDOM.render(
 <Hello  
    library="tReact"
    message="Hellfo" 
    number={3}
  />,
  document.getElementById('root')
);

