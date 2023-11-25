class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  private _areas: Area[] = [];
  private _lecturers: Lecturer[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }

  addArea(area: Area): void {
    this._areas.push(area);
  }
  removeArea(area: Area): void {
    const index = this._areas.indexOf(area);
    if (index !== -1) {
      this._areas.splice(index, 1);
    }
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  private _levels: Level[] = [];

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }
  get levels(): Level[] {
    return this._levels;
  }

  addLevel(level: Level): void {
    this._levels.push(level);
  }
  removeLevel(level: Level): void {
    const index = this._levels.indexOf(level);
    if (index !== -1) {
      this._levels.splice(index, 1);
    }
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  private _groups: Group[] = [];

  constructor(private _name: string, private _description: string) {}

  get name(): string {
    return this._name;
  }
  get description(): string {
    return this._description;
  }
  get groups(): Group[] {
    return this._groups;
  }

  addGroup(group: Group): void {
    this._groups.push(group);
  }

  removeGroup(group: Group): void {
    const index = this._groups.indexOf(group);
    if (index !== -1) {
      this._groups.splice(index, 1);
    }
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  private _area: Area;
  private _status: string;
  private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*

  constructor(private _directionName: string, private _levelName: string) {}

  get directionName(): string {
    return this._directionName;
  }

  set directionName(value: string) {
    this._directionName = value;
  }

  get levelName(): string {
    return this._levelName;
  }

  set levelName(value: string) {
    this._levelName = value;
  }

  get area(): Area {
    return this._area;
  }

  set area(value: Area) {
    this._area = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get students(): Student[] {
    return this._students;
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  removeStudent(student: Student): void {
    const index = this._students.indexOf(student);
    if (index !== -1) {
      this._students.splice(index, 1);
    }
  }

  setStudentStatus(student: Student, status: string): void {
    const index = this._students.indexOf(student);
    if (index !== -1) {
      this._students[index].status = status;
    }
  }

  showPerformance(): Student[] {
    const sortedStudents = this._students
      .slice()
      .sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods
  private _status: string;
  private _grades: { [workName: string]: number } = {}; // workName: mark
  private _visits: { [lesson: string]: boolean } = {}; // lesson: present

  constructor(
    private _firstName: string,
    private _lastName: string,
    private _birthYear: number
  ) {}

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  setGrade(workName: string, mark: number): void {
    this._grades[workName] = mark;
  }

  setVisit(lesson: string, present: boolean): void {
    this._visits[lesson] = present;
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentageValues = Object.values(this._visits);

    const attendancePercentage =
      (attendancePercentageValues.filter((present) => present).length /
        attendancePercentageValues.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

class Lecturer {
  constructor(
    private _name: string,
    private _surname: string,
    private _position: string,
    private _company: string,
    private _experience: number,
    private _courses: string[],
    private _contacts: string[]
  ) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
  }

  get experience(): number {
    return this._experience;
  }

  set experience(value: number) {
    this._experience = value;
  }

  get courses(): string[] {
    return this._courses;
  }

  set courses(value: string[]) {
    this._courses = value;
  }

  get contacts(): string[] {
    return this._contacts;
  }

  set contacts(value: string[]) {
    this._contacts = value;
  }
}
