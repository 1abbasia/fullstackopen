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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  
  
console.log('hello');

  return (
    
    <div>
      <Header course = {course.name} />
      <Content part1 = {course.parts[0].name} part2 = {course.parts[1].name} excercises1 = {course.parts[0].exercises} excercises2 = {course.parts[1].exercises} part3 = {course.parts[2].name} excercises3 = {course.parts[2].exercises} />
      <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
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
