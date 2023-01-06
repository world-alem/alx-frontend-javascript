interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[any: string]: any;
};

interface Directors extends Teacher {
	numberOfReports: number;
};

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
}

interface StudentClass {
	workOnHomework(): string;
	displayName(): string;
}

interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentClass {
	private _firstName: string;
	private _lastName: string;

	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	workOnHomework(): string {
		return `Currently working`;
	}

	displayName(): string {
		return this._firstName;
	}
}
