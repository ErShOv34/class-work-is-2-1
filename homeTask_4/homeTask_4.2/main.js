const users = [
    {name: 'Alice', age: 25, city: 'New York'},
    {name: 'Bob', age: 30, city: 'Los Angeles'},
    {name: 'Charlie', age: 28, city: 'Chicago'}
];

console.log("Имена пользователей:");
for (let user of users) {
   console.log(user.name);
}

console.log("Города проживания пользователей:");
for (let user of users) {
   console.log(user.city);
}

for (let user of users) {
   user.city = 'San Francisco';
}

console.log("Измененное значение параметра 'city':");
for (let user of users) {
   console.log(user.city);
}