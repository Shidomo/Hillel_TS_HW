class School {
  directions: Direction[] = [];

  addDirection(direction: Direction) {
    this.directions.push(direction);
  }
}

class Direction {
  levels: Level[] = [];

  get name(): string {
    return this._name;
  }

  constructor(private _name: string) {}

  addLevel(level: Level) {
    this.levels.push(level);
  }
}

class Level {
  groups: Group[] = [];

  constructor(private _name: string, private _program: string) {}

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: Group) {
    this.groups.push(group);
  }
}

class Group {
  _students: Student[] = [];
  get students() {
    return this._students;
  }

  constructor(public directionName: string, public levelName: string) {}

  addStudent(student: Student) {
    this._students.push(student);
  }

  showPerformance(): Student[] {
    const sortedStudents = this.students
      .slice()
      .sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }
}

class Student {
  grades: { [subject: string]: number } = {};
  attendance: boolean[] = [];

  constructor(
    public firstName: string,
    public lastName: string,
    public birthYear: number
  ) {}

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number) {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean) {
    this.attendance.push(present);
  }

  getPerformanceRating() {
    const gradeValues = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
