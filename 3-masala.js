const employee = {
    name: "Vali",
    salary: 500,
    experience: 3
};

function calculateSalary(employee) {
    if (employee.experience >= 3) {
        return employee.salary * 1.2;
    } else {
        return employee.salary;
    }
}

console.log(calculateSalary(employee));