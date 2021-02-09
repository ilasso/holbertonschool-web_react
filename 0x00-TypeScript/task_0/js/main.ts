interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Ivan",
    lastName: "Lasso",
    age: 22,
    location: "Cali",
  };
  
  const student2: Student = {
    firstName: "Andres",
    lastName: "Lasso",
    age: 32,
    location: "Cartagena",
  };
  
  const studentsList: Array<Student> = [student1, student2];
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  const table: HTMLTableElement = document.createElement("table");
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");
  const rowHead: HTMLTableRowElement = thead.insertRow(0);
  const cellfNameHead: HTMLTableCellElement = rowHead.insertCell(0);
  const cellLocationHead: HTMLTableCellElement = rowHead.insertCell(1);
  
  cellfNameHead.innerHTML = "firstName";
  cellLocationHead.innerHTML = "location";
  
  table.append(thead);
  
  studentsList.forEach((element) => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const cellfName: HTMLTableCellElement = row.insertCell(0);
    const cellLocation: HTMLTableCellElement = row.insertCell(1);
  
    cellfName.innerHTML = element.firstName;
    cellLocation.innerHTML = element.location;
  });
  
  table.append(tbody);
  body.append(table);