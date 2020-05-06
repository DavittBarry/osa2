import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'

const Header = ({course}) =>  {
  return (<div><h1>{course.name}</h1></div>) 
}

const TotalExercises = ({course}) =>  {
  const exlist = course.map(part => part.exercises) 
  console.log(exlist)
  const extotal = exlist.reduce((a, b) => a + b, 0)

  /*
  const extotal = exlist.reduce(function(sum, order) {
    console.log("extotal", sum, order)
    return sum + order.amount
  }, 0)
  */

  return (<div><h2>A total of {extotal} exercises.</h2></div>
  )
}
 
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  const course = courses[0]
  const extracourses = courses[1]
  console.log(extracourses)
  return (
    <div>
      <Header course={course} />
      <Course course={course.parts} />
      <TotalExercises course={course.parts} />
      <Header course={extracourses} />
      <Course course={extracourses.parts} />
      <TotalExercises course={extracourses.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))