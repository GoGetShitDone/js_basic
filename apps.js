////////////////////////////////
//// [- JAVASCRIPT BASIC -] ////
////////////////////////////////


// alert("hi");


////////////////////////////////
/////// [- CONDITIANAL -] //////
////////////////////////////////

const browserGetAge = parseInt(prompt("How old are you?"));


if (isNaN(browserGetAge) || browserGetAge < 0) {
    console.log("똑띠 다시 입력해라!");
}
else if (browserGetAge < 18) {
    console.log("Not Yet!");
}
else if (browserGetAge >= 18 && browserGetAge <= 60) {
    console.log("18-60");
}
else if (browserGetAge === 100) {
    console.log("WOW!!!");
}
else if (browserGetAge > 60) {
    console.log("Great!");
}


////////////////////////////////


const a = 10;
const b = "c";
const c = 7;

let myname = "david";

const amIFat = true;
const amIThin = false;

const amIetc = null;

let something;


console.log(a+b);
console.log(a*c);
console.log(myname * c);

myname = "David";

console.log("My name is " + myname);

console.log(amIFat);
console.log(amIThin);

console.log(amIetc);

console.log(something);

console.log(amIetc, something);


////////////////////////////////

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']

const nonsens = [1, 2, 3, "hello", false, true, null, undefined]

console.log(daysOfWeek, nonsens);
console.log(daysOfWeek[2]);
console.log(nonsens[4]);

daysOfWeek.push('sun');

console.log(daysOfWeek);


/////// {- object -} /////////

const player = {
    name : "David",
    HP : 999,
    MP : 999,
    sprit : 999,
};

console.log(player);
console.log(player.name, "|", "MP:", player.MP, "HP:", player.HP, "SPIRITs:",player.sprit);

/////// {- object -} /////////

console.log(player.HP);

player.HP = 888;
console.log(player.HP); // const 는 let 처럼 변하지 않지만, .HP 처럼 {} 데이터는 변화 가능

player.hunger = 999;
console.log(player); // const 내부 데이터도 추가가 가능함! 

player.MP = player.MP + 1 
console.log(player.MP);

////////////////////////////////
/////// [- FUNCTIONs -] ////////
////////////////////////////////

function sayHey(nameOfPerson, personEmotions){
    console.log("Hey~!", nameOfPerson, "How are you doing! Are you", personEmotions);
}

sayHey('David', 'Happy!')
sayHey('Lisa', 'Exsiting?')

////////////////////////////////

const Player2 = {
    sayHello: function(name2){
        console.log("Hi There!", name2);
    }
};

Player2.sayHello("Lio");



////////////////////////////////
///////// [- RETURN -] /////////
////////////////////////////////

const age = 100;
function calculateKRage(getForeinAge){
    return getForeinAge + 2;
}

const KRage = calculateKRage(age);

console.log(KRage);
