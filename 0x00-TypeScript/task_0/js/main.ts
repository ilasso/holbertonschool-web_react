interface Student {
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

const student1: Student = {
    firstName: 'Ivan',
    lastName: 'Lasso',
    age: 22,
    location: 'Cali'
}

const student2: Student = {
    firstName: 'Andres',
    lastName: 'Lasso',
    age: 32,
    location: 'Cartagena'
}


const studentsList: Array<Student> = [student1, student2];

/* vanilla*/
const table = document.createElement('table');

const thead: HTMLTableSectionElement = document.createElement('thead');
const trhead: HTMLTableRowElement = document.createElement('tr');
const trhfirstName: HTMLTableCellElement = document.createElement('td');
const trhlocation: HTMLTableCellElement = document.createElement('td');

table.append(thead);
trhfirstName.innerHTML = 'firstName';
trhlocation.innerHTML = 'location';
thead.append(trhead);
trhead.append(trhfirstName);
trhead.append(trhlocation);

const tbody: HTMLTableSectionElement = document.createElement('tbody');
table.append(tbody)

studentsList.forEach((student) => {
    let row = tbody.insertRow()
    for (let [k, v] of Object.entries(student)) {
        /*if (k === 'firstName' || k === 'location') {*/
            let cell = row.insertCell()
            let text = document.createTextNode(v)
            cell.appendChild(text)
        /*}*/
    }
});
document.body.appendChild(table);