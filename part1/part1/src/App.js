const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part}: excercises : {props.ex}</p>
    </div>
  )
}

const Content = (props) => {
    return (
      <div>
        <Part part = {props.part1} ex = {props.exercises1 }/>
        <Part part = {props.part2} />
        <Part part = {props.part3} />
        {/* <p>{props.part1}:  excercises : {props.excercises1}</p>
        <p>{props.part2}:  excercises : {props.excercises2}</p>
        <p>{props.part3}:  excercises : {props.excercises3}</p> */}
      </div>
    )
}

const Total = (props) => {
  return (
    <div>
    <p>Number of exercises: {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} excercises1 = {exercises1} excercises2 = {exercises2} part3 = {part3} excercises3 = {exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3 }/>
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App;
