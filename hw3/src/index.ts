const BadgeSize = {
  single: "4x3",
  double: "4x6",
};

const Print = {
  standart: "color",
  fast: "zpl",
};

enum BadgeTypesEnum {
  COLOR = "color",
  MONO = "mono",
}

type Grade = {
  workName: string;
  mark: boolean;
};

type Visit = {
  lesson: string;
  present: boolean;
};

type BadgeSizeType = keyof typeof BadgeSize;
type PrintType = keyof typeof Print;
type BadgeKeyType = `${BadgeSizeType}_${PrintType}`;

class Student {
  badgeTypeMap = new Map<BadgeKeyType, BadgeTypesEnum>([
    ["single_fast", BadgeTypesEnum.COLOR],
    ["single_standart", BadgeTypesEnum.COLOR],
    ["double_fast", BadgeTypesEnum.MONO],
    ["double_standart", BadgeTypesEnum.MONO],
  ]);

  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: Grade[] = []; // Опишите, как объект у которого есть поле workName и mark(оценка может быть выполненно или нет)
  private _visits: Visit[] = []; // Опишите, как объект у которого есть поле lesson (любое имя) и present

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  setGrade(grade: Grade): void {
    this._grades.push(grade);
  }

  setVisit(visit: Visit): void {
    this._visits.push(visit);
  }

  getPerformanceRating(): number {
    if (this._grades.length === 0) return 0;

    const totalMarks = this._grades.reduce(
      (sum, grade) => sum + (grade.mark ? 1 : 0),
      0,
    );
    const averageGrade = totalMarks / this._grades.length;

    const totalVisits = this._visits.length;
    const presentVisits = this._visits.filter((visit) => visit.present).length;
    const attendancePercentage = (presentVisits / totalVisits) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
