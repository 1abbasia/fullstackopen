import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>Give Feedback</h1>
    </div>
  )
}

const ButtonDisplay = (props) => {
  return (
    <div>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
    </div>
  )
}

const StatDisplay = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <div>good:</div>
      <div>neutral:</div>
      <div>bad:</div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header/>
      <ButtonDisplay/>
      <StatDisplay/>
    </div>
  )
}

export default App