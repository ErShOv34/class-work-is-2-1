function is_balance_exceeded(account, amount) {
    const balance = parseFloat(prompt(`Введите текущий баланс счета ${account}:`));
    return balance < amount;
}

const account = prompt("Введите номер счета:");
const amount = parseFloat(prompt("Введите сумму для проверки:"));

if (is_balance_exceeded(account, amount)) {
    console.log(`Баланс счета ${account} менее чем ${amount}`);
} else {
    console.log(`Баланс счета ${account} более чем ${amount}`);
}
