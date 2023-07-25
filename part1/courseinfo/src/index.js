import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.tittle.name}</h1>
  )
}

const Content = (props) => {
  console.log(props.part)
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
}

const App = () => {
  const course = {
    name: 'Half Stack application development', 
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10
      },
      {
        name: 'Using props to pass data',
        excercises: 7
      },
      {
        name: 'State of a component',
        excercises: 14
      }
    ]
  }

  return (
    <div>
      <Header tittle={course} />
      <Content part={course} />
      <Total totalexcercises={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))