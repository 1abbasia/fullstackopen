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
      <p>{props.part}: excercises : {props.number}</p>
    </div>
  )
}

const Content = (props) => {
    return (
      <div>
        <Part part = {props.part1} number = {props.excercises1}/>
        <Part part = {props.part2} number = {props.excercises2}/>
        <Part part = {props.part3} number = {props.excercises3}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    excercises: 10
  }
  const part2 = {
    name: 'Using Props to passd data',
    excercises: 7
  }
  const part3 = {
    name: 'State of a component',
    excercises: 14
  }
  
  
  

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1.name} part2 = {part2.name} excercises1 = {part1.excercises} excercises2 = {part2.excercises} part3 = {part3.name} excercises3 = {part3.excercises} />
      <Total total = {part1.excercises + part2.excercises + part3.excercises}/>
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
