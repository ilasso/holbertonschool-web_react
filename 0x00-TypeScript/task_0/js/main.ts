interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const stud1: Student = {
    firstName: "Carlos",
    lastName: "Garcia",
    age: 33,
    location: "Cali",
  };
  
  const stud2: Student = {
    firstName: "Marcela",
    lastName: "Arismendi",
    age: 32,
    location: "Palmira",
  };
  
  const studentsList: Array<Student> = [stud1, stud2];
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  const table: HTMLTableElement = document.createElement("table");
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");
  const rowHead: HTMLTableRowElement = thead.insertRow(0);
  const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
  const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);
  
  cell1Head.innerHTML = "firstName";
  cell2Head.innerHTML = "location";
  
  table.append(thead);
  
  studentsList.forEach((stud) => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
  
    cell1.innerHTML = stud.firstName;
    cell2.innerHTML = stud.location;
  });
  
  table.append(tbody);
  body.append(table);