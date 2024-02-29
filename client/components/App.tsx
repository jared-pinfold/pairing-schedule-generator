import { rotate, prepArrays, createPairs } from '../../index.ts'
import students from '../../data.ts'
import { useState } from 'react'

function App() {
  const [arrays, setArrays] = useState(prepArrays(students))
  const [output, setOutput] = useState('')
  const [column1, column2] = arrays

  const weeks = createPairs(arrays)


  return (
    <div>
      <h1>App</h1>
      {/* {column1.map((student, i) => (
        <p key={`${student}${i}`}>{`${student} - ${column2[i]}`}</p>
      ))} */}
      {weeks.map(week => (
        <section key={week.week}>
          <h2>Week {week.week}</h2>
          <h3>Monday</h3>
          {week.mon && week.mon[0].map((student, i)=>{
            return <p key={`${student}${i}`}>{`${student} - ${week.mon && week.mon[1][i]}`}</p>
          })}
          <h3>Tuesday</h3>
          {week.tue && week.tue[0].map((student, i)=>{
            return <p key={`${student}${i}`}>{`${student} - ${week.tue && week.tue[1][i]}`}</p>
          })}
          <h3>Wednesday</h3>
          {week.wed && week.wed[0].map((student, i)=>{
            return <p key={`${student}${i}`}>{`${student} - ${week.wed && week.wed[1][i]}`}</p>
          })}
          <h3>Thursday</h3>
          {week.thu && week.thu[0].map((student, i)=>{
            return <p key={`${student}${i}`}>{`${student} - ${week.thu && week.thu[1][i]}`}</p>
          })}
        </section>
      ))}
    </div>
  )
}

export default App
