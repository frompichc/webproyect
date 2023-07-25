import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statitcs = (props) => {
  const {good, neutral, bad, text} = props
  console.log(good, neutral, bad)
  if (good > 0 || neutral > 0 || bad > 0) {
    switch (text) {
      case "Positive":
        return (
          <tr>
            <td>{text}:</td>
            <td>{(good)/(good+neutral+bad)}</td>
          </tr>
          
        )
      case "Average":
        return (
          <tr>
            <td>{text}:</td>
            <td>{(good-bad)/(good+neutral+bad)}</td>
          </tr>
          
        )
      case "Good":
        return (
          <tr>
            <td>{text}:</td>
            <td>{good}</td>
          </tr>
        )  
      case "Neutral":
        return (
          <tr>
            <td>{text}:</td>
            <td>{neutral}</td>
          </tr>
        )  
        case "Bad":
          return (
            <tr>
              <td>{text}:</td>
              <td>{bad}</td>
            </tr>
            
          )  
      default:
        return (
          <tr>
            <td>{text}:</td>
            <td>{good+neutral+bad}</td>
          </tr>
          
        )
    }
  } else if (text == "Good") {
    return (
      <tr><td>No feedbacks given</td></tr>
      
    )
  }

}

const Button = (props) => {
  const {text, action} = props
  return (
    <button onClick={action}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)  

  const setGoodReviews = () => {
    setGood(good+1)
  }

  const setNeutralReviews = () => {
    setNeutral(neutral+1)
  }

  const setBadReviews = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text={'Good'} action={setGoodReviews} />
      <Button text={'Neutral'} action={setNeutralReviews} />
      <Button text={'Bad'} action={setBadReviews} />
      <h2>Statics</h2>
      <table>
        <tbody>
          <Statitcs good={good} neutral={neutral} bad={bad} text={'Good'} />
          <Statitcs good={good} neutral={neutral} bad={bad} text={'Neutral'} />
          <Statitcs good={good} neutral={neutral} bad={bad} text={'Bad'} />
          <Statitcs good={good} neutral={neutral} bad={bad} text={'All'} />
          <Statitcs good={good} neutral={neutral} bad={bad} text={'Average'} />
          <Statitcs good={good} neutral={neutral} bad={bad} text={'Positive'} />
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)