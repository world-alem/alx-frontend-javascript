interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
};

const student1: Student = {
	firstName: 'Student 1',
	lastName: 'Last name',
	age: 10,
	location: 'Here'
};

const student2: Student = {
	firstName: 'Student 2',
	lastName: 'Last name',
	age: 10,
	location: 'Here'
};

const studentList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

const tableHeader: HTMLTableSectionElement = document.createElement('thead');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

const tableHeaderRow: HTMLTableRowElement = document.createElement('tr');

const nameHeader: HTMLTableCellElement = document.createElement('th');
const locationHeader: HTMLTableCellElement = document.createElement('th');

nameHeader.innerText = 'Name';
locationHeader.innerText = 'Location';

tableHeaderRow.append(nameHeader, locationHeader);
tableHeader.append(tableHeaderRow);

studentList.forEach((student) => {
	const tableBodyRow: HTMLTableRowElement = document.createElement('tr');

	const nameRow: HTMLTableCellElement = document.createElement('td');
	nameRow.innerText = student.firstName;

	const locationRow: HTMLTableCellElement = document.createElement('td');
	locationRow.innerText = student.location;

	tableBodyRow.append(nameRow, locationRow);
	tableBody.appendChild(tableBodyRow);
});

table.append(tableHeader, tableBody);

document.body.append(table);
document.title = 'TypeScript - Task 0';
