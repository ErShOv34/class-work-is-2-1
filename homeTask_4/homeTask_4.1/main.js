const list = [[12, 3], [3,18], [11,7]]; 
let sum = 0;  
let count = 0;  

for (let arr of list)  
    for (let num of arr)  
        sum += num; 
        count++; 
     
 

console.log(list); 
console.log("Сумма всех элементов двумерного массива: " + sum); 
console.log("Количество элементов в каждом вложенном массиве:");
  for (let i = 0; i < list.length; i++) {
    console.log(`Вложенный массив ${i + 1} содержит ${list[i].length} элементов`);
}
