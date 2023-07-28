import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

/*const Header = (props) => {
  return (
    <h1>{props.tittle.name}</h1>
  )
}

const Content = (props) => {
  return (
    <Part part={props.part} />
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {
      props.totalexcercises.parts[0].excercises+
      props.totalexcercises.parts[1].excercises+
      props.totalexcercises.parts[2].excercises}
    </p>
  )
}

const Part = (props) => {
   return (
    <div>
      <p>{props.part.parts[0].name} {props.part.parts[0].excercises}</p>
      <p>{props.part.parts[1].name} {props.part.parts[1].excercises}</p>
      <p>{props.part.parts[2].name} {props.part.parts[2].excercises}</p>
    </div>
  )
}*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//ReactDOM.render(<App />, document.getElementById('root'))