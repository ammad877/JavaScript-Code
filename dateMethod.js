var now = new Date();
document.write(`${now.toDateString()} </br>`);

var now = new Date();
document.write(`${now.getDate()} </br>`);

var now = new Date();
document.write(`${now.getFullYear()} </br>`);

var now = new Date();
document.write(`${now.getDay()} </br>`);

var now = new Date();
document.write(`${now.getMonth()} </br>`);

var now = new Date( 'December 19 2000');
document.write(`${now.getDay()} </br>`);

var now = new Date();
document.write(`${now.getHours()} </br>`);

var now = new Date();
document.write(`${now.getMinutes()} </br>`);

var now = new Date();
document.write(`${now.getSeconds()} </br>`);

var now = new Date();
document.write(`${now.getMilliseconds()} </br>`);

var now = new Date('December 19 2000');
document.write(`${now.getMinutes()} </br>`);

var nowSet = new Date();
nowSet.setDate(26)
document.write(`${nowSet} </br>`);

var nowSet = new Date();
nowSet.setMonth(2)
document.write(`${nowSet} </br>`);

var nowSet = new Date();
nowSet.setFullYear(2024)
document.write(`${nowSet} </br>`);

var nowSet = new Date();
nowSet.setHours(2)
document.write(`${nowSet} </br>`);

var nowSet = new Date();
nowSet.setMinutes(21)
document.write(`${nowSet} </br>`);

var now = new Date();
console.log(now.getMonth() + "/" + now.getDay() + "/" + now.getFullYear());
document.write(now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear())
