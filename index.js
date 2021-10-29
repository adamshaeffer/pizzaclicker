let cash = 0;//variable for current money
const money = document.getElementById('money');//display of current money
const clicker = document.getElementById('clicker');//button for Make Money

const makeMoney = () => {//Method when click 'Make Money!' button
    cash++;
    money.innerHTML = `$${cash}`;
    clicker.blur();
}