class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        let validArguments = [username, position, department]
            .map((e) => Boolean(e))
            .includes(false) || salary <= 0
            ? false
            : true
        if (validArguments) {
            if (this.departments[department]) {
                this.departments[department].push({ username, position, salary })
            } else {
                this.departments[department] = [{ username, position, salary }];
            }
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        } else {
            throw new TypeError('Invalid input!');
        }
    };

    bestDepartment() {
        let bestDepartment = { average: 0 };
        for (const department in this.departments) {

            const currentSalary = this.departments[department]
                .reduce((acc, num) => acc += (num.salary), 0);
            const currAvg = currentSalary / this.departments[department].length;

            if (currAvg > bestDepartment.average) {
                bestDepartment.average = currAvg;
                bestDepartment.department = department;
            }
        }


        const sorting = this.departments[bestDepartment.department]
            .sort((acc, num) => num.salary - acc.salary || acc.username.localeCompare(num.username));

        const printing = [];
        for (const employee of sorting) {
            printing.push(`${employee.username} ${employee.salary} ${employee.position}`);
        }

        return `Best Department is: ${bestDepartment.department}\nAverage salary: ${bestDepartment.average.toFixed(2)}\n${printing.join('\n')}`
    };
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());