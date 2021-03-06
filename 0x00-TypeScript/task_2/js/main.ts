interface DirectorInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    workDirectorTasks() : string;
}

interface TeacherInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    workTeacherTasks() : string;
}


export class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home"
    } 
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    } 
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

export function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'string' && salary[0] === '$')
        salary = salary.slice(1);
    if (Number(salary) < 500) 
        return new Teacher;
    else 
        return new Director;

}
/*const emp1 = createEmployee(200);
console.log(emp1.workFromHome());
console.log(emp1. getToWork());
console.log(emp1.workDirectorTasks());

const emp2 = createEmployee(1000);
console.log(emp2.workFromHome());
console.log(emp2. getToWork());
console.log(emp2.workDirectorTasks());

const emp3 = createEmployee('$500');
console.log(emp3.workFromHome());
console.log(emp3. getToWork());
console.log(emp3.workDirectorTasks());
*/

export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)){
        console.log(employee.workDirectorTasks());
        return employee.workDirectorTasks();
    }
    else {
        console.log(employee.workTeacherTasks());
        return employee.workTeacherTasks();
    }
}


/*executeWork(createEmployee(200));
executeWork(createEmployee(1000));*/


type Subjects = 'Math' | 'History';

export function teachClass(todayClass:Subjects): string {
    if(todayClass === 'Math')
        return 'Teaching Math';
    else if (todayClass === 'History')
        return 'Teaching History';

}

// console.log(teachClass('hola'));
// console.log(teachClass('Math'));
// console.log(teachClass('History'));