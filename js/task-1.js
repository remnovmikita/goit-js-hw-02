function makeTransaction(quantity, pricePerDroid, customerCredits){
 let generalSumm = quantity * pricePerDroid;

    if (customerCredits >= generalSumm ){
        return `You ordered ${quantity} droids worth ${generalSumm} credits!`;
    } else {
        return "Insufficient funds!";
    }

}


/*
quantity — кількість замовлених дроїдів
pricePerDroid — ціна одного дроїда
customerCredits — сума коштів на рахунку клієнта
*/
/*
Доповни функцію таким чином:

1. Оголоси змінну для зберігання загальної суми замовлення 
(загальна вартість усіх замовлених дроїдів) 
і задай їй вираз розрахунку цієї суми.
2. Додай перевірку, чи зможе клієнт оплатити замовлення:
якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, 
а <totalPrice> це їх загальна вартість.
*/


console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
