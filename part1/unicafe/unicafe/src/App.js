import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>Give Feedback</h1>
    </div>
  )
}
//git check2
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

  //if/else statement to dtermine whether to render stats or message prompting user to click any button

  if(props.all === 0){
    return(
     <div>No Feedback given</div> 
    )
  }
  return (
      <div>
        <table>
          <tr>
            <th>Good:</th>
            <th>{props.goodCount}</th>
          </tr>
          <tr>
            <th>Bad:</th>
            <th>{props.badCount}</th>
          </tr>
          <tr>
            <th>Neutral:</th>
            <th>{props.neutralCount}</th>
          </tr>
          <tr>
            <th>All</th>
            <th>{props.all}</th>
          </tr>
          <tr>
            <th>Average Score:</th>
            <th>{props.avg}</th>
          </tr>
          <tr>
            <th>Postive Average:</th>
            <th>{props.posPercent}</th>
          </tr>
        </table>
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