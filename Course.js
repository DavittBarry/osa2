import React from 'react'

const Course = ({course}) =>  {
    const partname = course.map(part => <li key={part.id}>{part.name} {part.exercises}</li>) 
    console.log(partname)
   return (<div>{partname}</div>)
  }

  export default Course