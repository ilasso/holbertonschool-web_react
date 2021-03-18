import { getListObject, addElementToList } from './3-list.js'

const lista = getListObject(['name', 'first']);
console.log(lista);

console.log(addElementToList(lista, 'Guillaume'));
