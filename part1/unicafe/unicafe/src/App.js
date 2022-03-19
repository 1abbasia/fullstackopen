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
      <button onClick={props.handleGoodCounter}>good</button>
      <button>neutral</button>
      <button>bad</button>
    </div>
  )
}


const StatDisplay = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <div>goooood:{props.goodCount}</div>
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

  const handleGoodCounter = () => {setGood(good +1)}

  

  return (
    <div>
      <Header/>
      <ButtonDisplay handleGoodCounter = {handleGoodCounter} />
      <StatDisplay goodCount = {good}/>
    </div>
  )
}

export default App