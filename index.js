import {students} from './data.js'
import { writeFile } from 'node:fs/promises'


export function prepArrays(students){
  const halfRoundedDown = Math.floor(students.length / 2)
  const arr1 = students.slice(0, halfRoundedDown)
  const arr2 = students.slice(halfRoundedDown)
  if (arr1.length < arr2.length) arr1.push('G-g-g-ghost!')
  return [arr1, arr2]
}

 export function rotate(arrays){
  const [arr1, arr2] = arrays
  const [permanent, first1, ...rest1] = arr1
  const rest2 = arr2.slice(0, -1)
  const last2 = arr2[arr2.length - 1]
  return [
    [permanent, ...rest1, last2],
    [first1, ...rest2],
  ]
}

export function createPairs(arrays) {
  let workingArr = [... arrays]
  const pairs = [
    {week: 1},
    {week: 2},
    {week: 3},
    {week: 4},
    {week: 5},
    {week: 6},
  ]

  pairs.forEach(week => {
    workingArr = rotate(workingArr)
    week.mon = [...workingArr]
    workingArr = rotate(workingArr)
    week.tue = [...workingArr]
    workingArr = rotate(workingArr)
    week.wed = [...workingArr]
    workingArr = rotate(workingArr)
    week.thu = [...workingArr]
  })
  return pairs
}

const stringTemplate = [
    "## Pairing Schedule",
]

createPairs(prepArrays(students)).forEach(week => {
    stringTemplate.push([
        "",
        "<details>",
        `<summary><b><u>Week ${week.week}</u></b></summary>`,
        "",
        "<details>",
        "<summary><i>--- Monday ---</i></summary>",
        "",
        "| | |",
        "|-|-|",
        week.mon[0].map((student, i )=> `|${student}|${week.mon[1][i]}|`).join('\n'),
        "</details>",
        "",
        "<details>",
        "<summary><i>--- Tuesday ---</i></summary>",
        "",
        "| | |",
        "|-|-|",
        week.tue[0].map((student, i )=> `|${student}|${week.tue[1][i]}|`).join('\n'),
        "</details>",
        "",
        "<details>",
        "<summary><i>--- Wednesday ---</i></summary>",
        "",
        "| | |",
        "|-|-|",
        week.wed[0].map((student, i )=> `|${student}|${week.wed[1][i]}|`).join('\n'),
        "</details>",
        "",
        "<details>",
        "<summary><i>--- Thursday ---</i></summary>",
        "",
        "| | |",
        "|-|-|",
        week.thu[0].map((student, i )=> `|${student}|${week.thu[1][i]}|`).join('\n'),
        "</details>",
        "</details>",
    ].join('\n'))
    
})
await writeFile('pairing.md', stringTemplate.join('\n'), 'utf-8')
