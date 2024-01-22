//Chapter 2  Start

//  Q No 1

// var username = "ammad";

//  Q No 2

// var myName = "Ammad Ali"
// alert(myName);

//  Q No 3

// var message = 'hello world';
// alert(message);

// Q N0 4

// var name = "Jhone Doe";
// var age = "15 years old";
// var certificate = "Web Development";
// alert(name);
// alert(age);
// alert(certificate);

// var name = "Jhone Doe";
// var age = "15 years old";
// var certificate = "Web Development";
// alert(name);
// if (name) {
//   alert(age);
// }
// if (age) {
//   alert(certificate);
// }

// Q NO 5

// var a = 'PIZZA \n PIZZ \n PIZ \n PI \n P'
// alert(a);

// Q NO 6

// var email = "ammad.ulla877@gmail.com"
// // alert('My email address is' + ' ' + email);
// alert(`my emailn address is ${email}`);

// Q NO 7

// var book = "“A smarter way to learn JavaScript."
// alert(`i'm trying to learn the ${book}`);

// Q NO 8

// document.write('yuh! I can Write HTML content through JavaScript');

// Q NO 9

// alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");

//Chapter 2  End

// Chapter 3 Start

// Q NO 1

// var age = 22;
// alert(`i am ${age} years old`);

// Q NO 2

// var time = 0
// time++
// alert(`you have visited ${time++}`);

// Q NO 3

// var birthYear = 2000
// document.write(`my birth year is ${birthYear}`)

// Q NO 4

// var name = prompt("Enter Your Name ?");
// var productTitle = prompt("What's Your Product Title ?");
// var quantities  = prompt("How many orders you want ?");

// document.write(`${name} ordered ${quantities}  ${productTitle}(s) on xyz Clothing Store`);

// Chapter 3 End

// Chapter 5 Start

// Q NO 1

// var a = 3
// var b = 5
// var c = a + b;
// document.write(`Sum of ${a} and ${b} is ${c}`)

// Q NO 2

// var a = 54
// var b = 18
// var c = a - b;
// document.write(`Subtract of ${a} and ${b} is ${c}`);

// var a = 4
// var b = 10
// var c = a * b;
// document.write(`Multiplication of ${a} and ${b} is ${c}`);

// var a = 20
// var b = 4
// var c = a / b;
// document.write(`Division of ${a} and ${b} is ${c}`);

// var a = 40
// var b = 10
// var c = a % b;
// document.write(`Modulus of ${a} and ${b} is ${c}`);

// Q NO 3

// var a;
// document.write(`Value after variable declaration is: ${a} </br>`);
// var a = 5;
// document.write(`Initial Value: ${a} </br>`);
// a++
// document.write(`Value After increament: ${a} </br>`);
// a =  a + 7
// document.write(`Value After addition: ${a} </br>`);
// a--
// document.write(`Value After decreament: ${a} </br>`);
// a = a % 3
// document.write(`The remainder is: ${a} </br>`);

// Q NO 4

// var ticketPrice = 600;
// var pickAtickets = +prompt("How many tickets you want?");
// var costOfTickets =ticketPrice * pickAtickets;
// document.write(`total cost of buy ${pickAtickets} tickets to a movie is ${costOfTickets}PKR`);

// Q NO 5

// var a = 5;
// document.write(
//   `${a} X 1 = ${a * 1} </br> ${a} X 2 = ${a * 2} </br> ${a} X 3 = ${
//     a * 3
//   } </br> ${a} X 4 = ${a * 4} </br> ${a} X 5 = ${a * 5} </br>`
// );

// var a = 1 ;
// while(a <= 10){
//     document.write(`${a} </br>`);
//     a++
// }

// var a = 1
// do {
//     document.write(`${a} </br>`);
//     a++
// } while (a<=8);

//  for (var a = 1; a <= 10; a++){
//     document.write(`${a} </br>`)
//  }
// var a = 1
//  for (a; a <= 10; a++){
//     document.write(`${a} </br>`)
//  }

// var a = +prompt("Enter A Number");
// var c;

// for (var b = 1; b<=10; b++){
//     c = a*b;
//     document.write(`${a} x ${b} = ${c} </br>`)
// }

// for (a = 1; a < 100; a = a + 10) {
//   for (b = a; b < a + 10; b++) {
//     document.write(b + " ");
//   }
//   document.write("</br>")
// }

// for (a = 1; a <= 5; a++){
//     for(b = 1; b <= a; b++){
//         document.write(b + " ")
//     }
//     document.write("<br>")
// }

// for (a = 1; a <= 5; a++){
//     for(b = 1; b <= a; b++){
//         document.write(a + " ")
//     }
//     document.write("<br>")
// }

// document.write("<br>")


// for (a = 5; a >= 1; a--){
//     for(b = 1; b <= a; b++){
//         document.write(b + " ")
//     }
//     document.write("<br>")
// }

// document.write("<br>")

// for (a = 5; a >= 1; a--){
//     for(b = 1; b <=a; b++){
//         document.write(a + " ")
//     }
//     document.write("<br>")
// }

// var array  = [
//     ["Ammad",22,"Male","B.Com"],
//     ["Ali",16,"Male","Matric"],
//     ["Sana",20,"Female","Inter"],
//     ["Munir",17,"Male","Inter"]    
// ]

// console.log(array);
// document.write("<table border>");
// for(a=0; a<4; a++){
//     document.write("<tr>")
//     for(b=0; b<3;b++){
//         document.write( "<td>" + array[a][b] + " " + "</td>")
//     }
//     document.write("</tr>")

//     // document.write("</br>")
// }
// document.write("</table>")

// var a = ["ali","ammad","munir"];
// var b = ["saba","Sana"];
// var c = a.concat(b)
// document.write(c + "<br>");

// var a = ["ali","ammad","munir"];
// var b = a.concat("saba","Sana")
// document.write(b + "</br>")

// var a = ["ali","ammad","munir"];
// var b = ["saba","Sana"];
// var d = ["faraz","huraira"]
// var c = a.concat(b,d)
// document.write(c + "<br>");

// var a = ["ali","ammad","munir"];
// var b = ["saba","Sana"];
// var c = a.concat(b)
// var d = c.join(" * ");
// document.write(d);

// var a = ["Lion","monkey","horse","cat","dog"];
// var b = a.slice(1,3)
// document.write(b + "</br>")

// var a = ["Lion","monkey","horse","cat","dog"];
// a.splice(2,0,"elephant","zeebra")
// document.write(a)

// var a = ["ali","ammad","munir"];
// // var a = 30
// document.write(a + "</br>")

// var b = Array.isArray(a);
// document.write(b);

// if(Array.isArray(a)){
//     document.write("this is an array")
// }else{
//     document.write("this is not an array")
// }

// var a = ["ali","ammad","munir","sana","saba"];
// document.write(a + "</br>")

// var b = a.indexOf("saba")
// document.write(b + "</br>")

// var c = a.lastIndexOf("munir")
// document.write(c)

// var a = ["ali","ammad","munir","sana","saba"];
// document.write(a + "</br>");

// var b = a.includes("mubashir");
// document.write(b + "</br>");

// var ages = [10,13,18,20];
// var b = ages.some(checkAdult);
// document.write(b + "</br>");

// function checkAdult(age) {
//     return age >= 18
// }

// document.write("</br>")

// var ages = [24,33,18,20];
// var b = ages.every(checkAdult);
// document.write(b + "</br>");

// function checkAdult(age) {
//     return age >= 18
// }

// var ages = [13,8,18,20];
// var b = ages.find(checkAdult);
// document.write(b + "</br>");

// function checkAdult(age) {
//     return age >= 18
// }

// document.write("</br>");

// var ages = [13,8,18,20];
// var b = ages.findIndex(checkAdult);
// document.write(b + "</br>");

// function checkAdult(age) {
//     return age >= 18
// }

// var ages = [23,8,18,20];
// var b = ages.filter(checkAdult);
// document.write(b + "</br>");

// function checkAdult(age) {
//     return age >= 18
// }

// var a = ["ali","ammad","munir","sana","saba"];
// document.write(a + "</br>");

// a.forEach(function(value, index){
//     document.write(`${index} ; ${value} </br>`)
// })