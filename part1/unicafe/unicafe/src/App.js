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
      <button onClick={props.handleNeutralCounter}>neutral</button>
      <button onClick={props.handleBadCounter}>bad</button>
    </div>
  )
}


const StatDisplay = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <div>goooood:{props.goodCount}</div>
      <div>neutral:{props.neutralCount}</div>
      <div>bad:{props.badCount}</div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodCounter = () => {setGood(good +1)};

  const handleNeutralCounter = () => {setNeutral(neutral +1)};

  const handleBadCounter = () => {setBad(bad +1)};
  

  

  return (
    <div>
      <Header/>
      <ButtonDisplay handleGoodCounter = {handleGoodCounter} handleNeutralCounter = {handleNeutralCounter} handleBadCounter = {handleBadCounter}/>
      <StatDisplay goodCount = {good} neutralCount = {neutral} badCount = {bad}/>
    </div>
  )
}

export default App