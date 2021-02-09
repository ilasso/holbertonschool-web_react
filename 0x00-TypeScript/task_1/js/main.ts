interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any
}

interface Directors extends Teacher{
    numberOfReports: number;
}

// printing teachers
interface printTeacherFunction {
    firstName: string,
    lastName: string
}

function printTeacher(teacher: printTeacherFunction) {
    return `${teacher.firstName[0]}. ${teacher.lastName}`
}

/*const teach: printTeacherFunction = {
    firstName:"Ivan",
    lastName: "Lasso"
}

console.log(printTeacher(teach));*/

interface Student {
    firstName:string;
    lastName:string;
}

class StudentClass {
    firstName: string
    lastName: string
    constructor(student:Student){
        this.firstName = student.firstName
        this.lastName = student.lastName
    }
    workOnHomework(){
        return "Currently working"
    }
    displayName() {
        return this.firstName
    }

}

/*const stu1: Student = {
    firstName:"Ivan",
    lastName: "Lasso"
}

const student1 = new StudentClass(stu1);

console.log(student1);
console.log(student1.workOnHomework());
console.log(student1.displayName());*/