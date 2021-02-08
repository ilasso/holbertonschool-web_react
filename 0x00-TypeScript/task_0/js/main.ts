interface Student {
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

class Student {
    constructor (
        firstName:string,
        lastName:string,
        age:number,
        location:string
        ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.location = location;
    }

}

const student1:Student = new Student("Ivan","Lasso", 46,"Cali");
const student2:Student = new Student("Andres","Lasso", 16,"Cali");

const students = [student1, student2];

const table = document.createElement('table');
students.forEach((student) => {
    let row = table.insertRow()
    for (let [k, v] of Object.entries(student)) {
        if (k === 'firstName' || k === 'location') {
            let cell = row.insertCell()
            let text = document.createTextNode(v)
            cell.appendChild(text)
        }
    }
});
document.body.appendChild(table);