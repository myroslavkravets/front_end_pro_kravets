class Student {
    constructor(firstName, lastName, birthYear, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null); // Масив для відвідуваності з 25 елементами, всі значення спочатку null
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    present() {
        const index = this.attendance.indexOf(null); // Знаходимо перше порожнє місце в масиві
        if (index !== -1) {
            this.attendance[index] = true;
        }
    }

    absent() {
        const index = this.attendance.indexOf(null); // Знаходимо перше порожнє місце в масиві
        if (index !== -1) {
            this.attendance[index] = false;
        }
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendedClasses = this.attendance.filter(value => value === true).length;
        const totalClasses = this.attendance.filter(value => value !== null).length;
        const attendanceRate = attendedClasses / totalClasses;

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Олександр", "Іваненко", 2000, [95, 85, 92, 88, 90]);
const student2 = new Student("Марія", "Петренко", 1999, [80, 85, 78, 82, 79]);
const student3 = new Student("Олег", "Сидоренко", 2001, [98, 99, 97, 96, 100]);

student1.present();
student1.present();
student1.absent();
student1.present();

student2.absent();
student2.absent();
student2.present();
student2.present();

student3.present();
student3.present();
student3.present();
student3.present();

console.log(`${student1.firstName} ${student1.lastName}`);
console.log("Вік:", student1.getAge());
console.log("Середній бал:", student1.getAverageGrade());
console.log("Відвідуваність:", student1.attendance);
console.log("Результат:", student1.summary());

console.log(`${student2.firstName} ${student2.lastName}`);
console.log("Вік:", student2.getAge());
console.log("Середній бал:", student2.getAverageGrade());
console.log("Відвідуваність:", student2.attendance);
console.log("Результат:", student2.summary());

console.log(`${student3.firstName} ${student3.lastName}`);
console.log("Вік:", student3.getAge());
console.log("Середній бал:", student3.getAverageGrade());
console.log("Відвідуваність:", student3.attendance);
console.log("Результат:", student3.summary());
