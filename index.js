"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_ts_1 = require("./data.ts");
function prepArrays(students) {
    var halfRoundedDown = Math.floor(students.length / 2);
    var arr1 = students.slice(0, halfRoundedDown);
    var arr2 = students.slice(halfRoundedDown);
    if (arr1.length < arr2.length)
        arr1.push('G-g-g-ghost!');
    console.log({ halfRoundedDown: halfRoundedDown, arr1: arr1, arr2: arr2 });
    return [arr1, arr2];
}
function rotate(arrays) {
    var arr1 = arrays[0], arr2 = arrays[1];
    var permanent = arr1[0], first1 = arr1[1], rest1 = arr1.slice(2);
    var rest2 = arr2.slice(0, -1);
    var last2 = arr2[arr2.length - 1];
    console.log({ arr2: arr2, rest2: rest2, last2: last2 });
    return [
        __spreadArray(__spreadArray([permanent], rest1, true), [last2], false),
        __spreadArray([first1], rest2, true),
    ];
}
function createPairsForWeek(arrays) { }
rotate(prepArrays(data_ts_1.default));
// TODO: Process process arrays
// TODO: write to file
