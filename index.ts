import students from './data.ts'
import { Arrays } from './models/models.ts'

export function prepArrays(students: string[]): Arrays {
  const halfRoundedDown = Math.floor(students.length / 2)
  const arr1 = students.slice(0, halfRoundedDown)
  const arr2 = students.slice(halfRoundedDown)
  if (arr1.length < arr2.length) arr1.push('G-g-g-ghost!')
  return [arr1, arr2]
}

 export function rotate(arrays: Arrays): Arrays {
  const [arr1, arr2] = arrays
  const [permanent, first1, ...rest1] = arr1
  const rest2 = arr2.slice(0, -1)
  const last2 = arr2[arr2.length - 1]
  return [
    [permanent, ...rest1, last2],
    [first1, ...rest2],
  ]
}
interface Week {
  week: number
  mon?: Arrays
  tue?: Arrays
  wed?: Arrays
  thu?: Arrays
}
export function createPairs(arrays: Arrays) {
  let workingArr = [... arrays]
  const pairs: Week[] = [
    {week: 1},
    {week: 2},
    {week: 3},
    {week: 4},
    {week: 5},
    {week: 6},
  ]

  pairs.forEach(week => {
    workingArr = rotate(workingArr as Arrays)
    week.mon = [...workingArr] as Arrays
    workingArr = rotate(workingArr as Arrays)
    week.tue = [...workingArr] as Arrays
    workingArr = rotate(workingArr as Arrays)
    week.wed = [...workingArr] as Arrays
    workingArr = rotate(workingArr as Arrays)
    week.thu = [...workingArr] as Arrays
  })
  console.log(pairs)
  return pairs
}

// TODO: write to file
