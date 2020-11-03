const add = require('./add.js').add;
const sub = require("./subtract.js").sub

const readline = require('readline').createInterface( {
    input:process.stdin,
    output:process.stdout
})

const args = process.argv.slice(2);
const num1 = args[0];
const num2 = args[1];

readline.question('? add | subtract ', op => {
    if (op === 'add') {
        let content = num1 + " + " + num2 + " = " + add(num1,num2)
        console.log(content);
    } else if (op === 'subtract') {
        let content = num1 + " - " + num2 + " = " + sub(num1,num2)
        console.log(content);
    } else {
        console.log('Unknown operator');
    }

    readline.close()
})