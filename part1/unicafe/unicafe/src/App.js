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
  //logic for stats section
  return (
    <div>
      <h1>Statistics</h1>
      <div>goooood:{props.goodCount}</div>
      <div>neutral:{props.neutralCount}</div>
      <div>bad:{props.badCount}</div>
      <div>all:{props.all}</div>
      <div>average score:{props.avg}</div>
      <div>Positive percentage:{props.posPercent}</div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  //create on click event for  button. It increments out good variable count by 1 using hooks on line 36-38
  const handleGoodCounter = () => {setGood(good +1)};

  const handleNeutralCounter = () => {setNeutral(neutral +1)};

  const handleBadCounter = () => {setBad(bad +1)};

  //logic for average score varibale based on the good, neutral and bad values as good=1, neutral =0, bad =-1
  const avgValues = ((good*1) + (neutral*0) + (bad*0))/3;

  //logic for displaying all count 
  const allCount = good + neutral + bad;
  
  const pos = (good/allCount)*100;
  console.log(avgValues);
  console.log(allCount);
  

  

  return (
    <div>
      <Header/>
      <ButtonDisplay handleGoodCounter = {handleGoodCounter} handleNeutralCounter = {handleNeutralCounter} handleBadCounter = {handleBadCounter}/>
      <StatDisplay goodCount = {good} neutralCount = {neutral} badCount = {bad} avg ={avgValues} all ={allCount} posPercent ={pos}/>
    </div>
  )
}

export default App 