const companies = {
    company1: {
        employees: ['Alice', 'Bob', 'Charlie']
    },
    company2: {
        employees: ['David', 'Eve', 'Frank']
    }
};

for (let company in companies) {
    console.log(`Сотрудники компании ${company}:`);
    for (let i = 0; i < companies[company].employees.length; i++) {
        console.log(companies[company].employees[i]);
    }
}