import students from './data.js';
function prepArrays(students) {
    const halfRoundedDown = Math.floor(students.length / 2);
    const arr1 = students.slice(0, halfRoundedDown);
    const arr2 = students.slice(halfRoundedDown);
    if (arr1.length < arr2.length)
        arr1.push("G-g-g-ghost!");
    console.log({ halfRoundedDown, arr1, arr2 });
    return [arr1, arr2];
}
prepArrays(students);
