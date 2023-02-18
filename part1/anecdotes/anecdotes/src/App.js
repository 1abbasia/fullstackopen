
import './App.css';
import { useState } from 'react'
//git check3



const Header = (props) => {
  return (
    <div>
      <h1>Anecdotes from software engineering</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleButtonClick}>Get another quote!</button>
      <button onClick= {props.handleVoteClick}>Vote for this quote</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  console.log(anecdotes.length)
  console.log(selected);

  const handleButtonClick = () => {
      setSelected(Math.floor(Math.random()*7));
  }

  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  console.log(votes);

  const maxVotes = Math.max(...votes);
  const winningAnecdote = anecdotes[votes.indexOf(maxVotes)];
  return (
    <div>
      <Header />
      <Button handleButtonClick = {handleButtonClick} handleVoteClick = {handleVoteClick}/>
      {anecdotes[selected]}
      <h1>Anecdote with the most votes:</h1>
      {winningAnecdote}
      
    </div>
  );
}

export default App;
