import {concatElements, mergeElements} from './5-merge.js';

const array1 = [1, 2];
const array2 = [3, 4];
console.log(concatElements(array1, array2));

const obj1 = { name: 'NAME' };
const obj2 = { age: 'AGE' };
console.log(mergeElements(obj1, obj2));