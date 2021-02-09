interface DirectorInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    workDirectorTasks() : string;
}

interface TeacherInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    workDirectorTasks() : string;
}


class Director {
    workFromHome() {
        return "Working from home"
    } 
    getToWork() {
        return "Getting a coffee break"
    }
    workDirectorTasks() {
        return "Getting to director tasks"
    }
}

class Teacher {
    workFromHome() {
        return "Cannot work from home"
    } 
    getToWork() {
        return "Cannot have a break"
    }
    workTeacherTasks() {
        return "Getting to work"
    }
}

function createEmployee(salary:number |string) {
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

function isDirector(employee:Director|Teacher):boolean{
    if (employee instanceof Teacher){
        return false;
    }
    return true;
}

function executeWork(employee:Director|Teacher): string{
    if (isDirector(employee)){
        return (employee as Director).workDirectorTasks();
    }
    else {
        return (employee as Teacher).workTeacherTasks();
    }
}


/*console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
*/

