const calculate = () =>{
    const inputamount1 = parseInt(document.querySelector('#amount-1').value);
    const inputamount2 = parseInt(document.querySelector('#amount-2').value);
    const inputamount3 = parseInt(document.querySelector('#amount-3').value);
    const inputcost1 = parseInt(document.querySelector('#cost-1').value);
    const inputcost2 = parseInt(document.querySelector('#cost-2').value);
    const inputcost3 = parseInt(document.querySelector('#cost-3').value);

    
    if (isNaN(inputamount1) || isNaN(inputamount2) || isNaN(inputamount3) || isNaN(inputcost1) || isNaN(inputcost2) || isNaN(inputcost3)){
    alert('Заполните все поля')
    return;
    }

    const ZeroCheck = inputcost1 <= 0 || inputcost2 <= 0 || inputcost3 <= 0;
    if (ZeroCheck)
    {
        alert("Цена не может быть меньше либо равна 0");
        return;
    }

    let gradeSum = (inputamount1*inputcost1) + (inputamount2*inputcost2) + (inputamount3*inputcost3);
    
    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `
    <p>Общая стоимость электроники: ${gradeSum}</p>
    `;
}