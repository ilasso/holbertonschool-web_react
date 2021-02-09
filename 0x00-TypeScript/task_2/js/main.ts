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
        salary = salary.slice(1)
    if (Number(salary) < 500) return new Teacher
    else return new Director

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

export function isDirector(employee: Director | Teacher): boolean {
    if (employee instanceof Teacher){
        return false;
    }
    return true;
}

export function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)){
        console.log((employee as Director).workDirectorTasks());
    }
    else {
        console.log((employee as Teacher).workTeacherTasks());
    }
}


/*console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
*/

type Subjects = 'Math' | 'History';

function teachClass(todayClass:Subjects) {
    if(todayClass === 'Math')
        return 'Teaching Math';
    else 
        return 'Teaching History';
}

// console.log(teachClass('hola'));
// console.log(teachClass('Math'));
// console.log(teachClass('History'));