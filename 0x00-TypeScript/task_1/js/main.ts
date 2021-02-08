interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [noNameAttrib: string]: any
}

interface Directors extends Teacher{
    numberOfReports:number
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