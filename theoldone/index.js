let cash = 0;//variable for current money
let question = 1;
let pizzas = 0;//variable for current number of pizzas
let kids = 0;//variable for total number of kids helped
let name = '';
let pizzaria = '';
let frijolesWork = false;
let pizzariaWork = false;
let charityBoost = false;
let overrun = false;//Boolean to make pizza and help buttons disappear, won't disappear without it.
let work;//necessary variable for when someone works for you
let check1 = true;let check2 = true;let check3 = true;let check4 = true;
let check5 = true;let check6 = true;let check7 = true;let check8 = true;
let check9 = true;let check10 = true;let check11 = true;let check12 = true;
let check13 = true;let check14 = true;let check15 = true;let check16 = true;
let check17 = true;let check18 = true;
const money = document.getElementById('money');//display of current money
const clicker = document.getElementById('clicker');//button for Make Money
const frijoles = document.getElementById('frijoles');//Text line of your friend Frijoles
const ask = document.getElementById('ask');//Text line when asking a question
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const pizza = document.getElementById('pizza');//button for Buy Pizza
const fri = document.getElementById('fri');//short for Frijoles, another text line from Frijoles
const za = document.getElementById('za');//short for Pizza, the display of total pizzas
const workers = document.getElementById('workers');
const frij = document.getElementById('frij');//short for Frijoles, another text line from Frijoles
const callister = document.getElementById('callister');
const charity = document.getElementById('charity');
const help = document.getElementById('help');//button for Help Kid
const kid = document.getElementById('kid');
const form = document.getElementById('form');

help.style.display = 'none';
za.innerHTML = '';
ask.innerHTML = '';
input.style.display = 'none';
submit.style.display = 'none';
pizza.style.display = 'none';
fri.innerHTML = '';

const makeMoney = () => {//Method when click 'Make Money!' button
    cash++;
    money.innerHTML = `$${cash}`;
    clicker.blur();
    if(charityBoost) {
        cash++;
    }
    if(!check3 && cash > 9 && !overrun) {
        pizza.style.display = 'block';
    }
    if(cash===15 && check1) {
        clicker.style.display = 'none';
        frijoles.innerHTML = 'WOAH! You made 15 bucks! Sick!';
        ask.innerHTML = 'What\'s your name??';
        input.style.display = 'block';
        submit.style.display = 'block';
        input.focus();
        check1 = false;
    }
    if(cash==20 && check4) {
        frijoles.innerHTML = 'My name is Frijoles, I love pizza!';
        check4 = false;
    }
    if(cash===25 && check2) {
        frijoles.innerHTML = 'Dang dude, whatcha gonna do with all that cash?';
        check2 = false;
    }
    if(cash===30 && check3) {
        fri.innerHTML = 'You should buy me a pizza. I\'m reallll hungry!';
        clicker.style.display = 'none';
        frijoles.innerHTML = '';
        pizza.style.display = 'block';
        check3 = false;
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    if(question===1) {//Question: What is your name?
        name = input.value;
        frijoles.innerHTML = 'Nice to meet you, ' + name;
        ask.innerHTML = '';
        input.style.display = 'none';
        submit.style.display = 'none';
        clicker.style.display = 'block';
        input.innerText = '';
    }
    if(question===2) {//Question: What will you name the pizzaria?
        pizzaria = input.value;
        charity.innerHTML = 'Celebrating the grand opening of ' + pizzaria;
        charity.innerHTML += '! The brand-new pizzaria dedicated to helping at-risk and struggling kids! We would like to mention our biggest sponsor, ' + name;
        charity.innerHTML += '! He helped 10 kids live for a month with 30 pizzas each! Go to pizzas4kids.com to learn more!'
        frijoles.innerHTML = 'Dude, you just named the pizza place! Sweet! You know, you can buy pizzas there for only $5 now, and they\'ll make pizzas for you! Pretty rad huh?'
        ask.innerHTML = '';
        input.style.display = 'none';
        submit.style.display = 'none';
        clicker.style.display = 'block';
        pizza.style.display = 'block';
        help.style.display = 'block';
        pizzariaWork = true;
        overrun = false;
        workers.innerHTML += ' ' + pizzaria;
        workers.innerHTML += ' (lvl 1)';
        work = setInterval(buyPizza, 5000);
        pizza.innerText = 'Buy Pizza! - $5';
    }

})


const buyPizza = () => {//Method when click 'Buy Pizza!' button
    cash -= 5;
    if(!pizzariaWork) {
        cash -= 5;
    }
    money.innerHTML = `$${cash}`;
    pizza.blur();
    pizzas++;
    za.innerHTML = `Pizzas: ${pizzas}`;
    fri.innerHTML = '';
    if(!frijolesWork) {
        frijoles.innerHTML = `THANKS! That was a great pizza! If you buy me ${10-pizzas} more pizzas, I\'ll totally start working for you!`;
    }
    if(cash<10) {
        pizza.style.display = 'none';
    }
    if(pizzas===1){
        cash = 999999999;//Use this 'glitch' when debugging.
        za.style.display = 'block';
        clicker.style.display = 'block';
    }
    if(pizzas===9 && check18){
        check18 = false;
        frijoles.innerHTML = `THANKS! That was a great pizza! If you buy me 1 more pizza, I\'ll totally start working for you!`;
    }
    if(pizzas===10 && check5){
        check5 = false;
        fri.innerHTML = '';
        frij.innerHTML = '';
        frijolesWork = true;
        frijoles.innerHTML = 'Thanks for the pizzas! You\'re a real baller! Imma start workin for you OK?'
        workers.innerHTML = 'Frijoles (lvl 1)';
        work = setInterval(makeMoney, 5000);
    }
    if(pizzas===11 && check6){
        check6 = false;
        frij.innerHTML = '';
        frijoles.innerHTML = 'Just keep getting me pizzas and I\'ll work faster!';
    }
    if(pizzas===15 && check7){
        check7 = false;
        clearInterval(work);
        workers.innerHTML = 'Frijoles (lvl 2)';
        work = setInterval(makeMoney,2500);
        frijoles.innerHTML = 'Dude, thanks for the pizzas, but I can\'t eat that many! Imma start giving them away, OK?';
    }
    if(pizzas===20 && check8){
        check8 = false;
        clearInterval(work);
        workers.innerHTML = 'Frijoles (lvl 3)';
        work = setInterval(makeMoney,1000);
        frijoles.innerHTML = 'Yo, this is my friend Callister, he\'s been taking some of my pizzas. He wanted to meet you!';
    }
    if(pizzas===21 && check9){
        check9 = false;
        frijoles.innerHTML = '';
        callister.innerHTML = 'Hey there, I\'m Callister. My pal Frijoles has been giving me a ton of pizzas. I wanna help you figure out what to do with them.';
    }
    if(pizzas===22 && check10){
        check10 = false;
        callister.innerHTML = 'I think there might be some kind of charity that will take your pizzas! Keep getting pizzas and they will talk to you soon!'
    }
    if(pizzas===23 && check11){
        check11 = false;
        callister.innerHTML = 'Keep getting pizzas!'
    }
    if(pizzas===25 && check12){
        check12 = false;
        clearInterval(work);
        workers.innerHTML = 'Frijoles (lvl 4)';
        work = setInterval(makeMoney,500);
    }
    if(pizzas===30 && check13){
        check13 = false;
        clearInterval(work);
        workers.innerHTML = 'Frijoles (MAX lvl)';
        work = setInterval(makeMoney,250);
        callister.innerHTML = '';
        charity.innerHTML = 'Hello, we here at Pizzas4Kids charities would like to talk to you about who we are and what we do!';
    }
    if(pizzas===31 && check14){
        check14 = false;
        charity.innerHTML = 'We donate pizzas all around town to kids who cannot afford them on their own.';
    }
    if(pizzas===32 && check15){
        check15 = false;
        charity.innerHTML = 'These kids come from tons of different situations, and we help them all!';
    }
    if(pizzas===33 && check16){
        check16 = false;
        charity.innerHTML = 'If you you would like to, you can help a kid live for a month with a donation of 30 pizzas!';
        help.style.display = 'block';
        overrun = true;
        clicker.style.display = 'none';
        pizza.style.display = 'none';
    }
    if(!check16 && pizzas>29 && !overrun) {
        help.style.display = 'block';
    }
}

const helpKids = () => {//Method when click 'Help Kid!' button  
    kids++;
    pizzas-=30;
    za.innerHTML = `Pizzas: ${pizzas}`;
    kid.innerHTML = `Kids Helped: ${kids}`;
    if(!pizzariaWork) {
        charity.innerHTML = `If you help ${10-kids} more kids, each with 30 pizzas, you can name the brand-new pizzaria we will open for at-risk kids.`;
    }
    help.blur();
    if(pizzas<30) {
        help.style.display = 'none';
    }
    if(kids===1) {
        pizzas = 999999999;//glitch while debugging
        overrun = false;
        charityBoost = true;
        frijoles.innerHTML = 'Bro, you just helped a kid live for a MONTH! That is so sweet! We\'re gonna make WAY more cash now!'
        clicker.style.display = 'block';
        pizza.style.display = 'block';
    }
    if(kids===2) {
        frijoles.innerHTML = '';
    }
    if(kids===9) {
        charity.innerHTML = 'Just one more kid with 30 pizzas, and you can name the brand-new pizzaria!';
    }
    if(kids===10) {
        charity.innerHTML = 'Congratulations! You helped 10 kids eat pizza for a month! For that great accomplishment, you can name this brand-new pizzaria!';
        question = 2;
        ask.className = 'charity';
        ask.innerHTML = 'What will you name the pizzaria?';
        input.style.display = 'block';
        submit.style.display = 'block';
        clicker.style.display = 'none';
        input.focus();
        overrun = true;
        pizza.style.display = 'none';
        help.style.display = 'none';
    }
}