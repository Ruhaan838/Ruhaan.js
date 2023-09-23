const readline = require('readline');
const read1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
read1.question("Enter Your name : ", (answer) =>{
    console.log("do you want to print \n [Y]es \t [N]o")
    read1.question("",(op)=>{
        if (op === 'Y'){
            console.log(`Hello, ${answer} !`)
        } else if (op === 'N'){
            console.log("So why You Run The Program !?")
        } else {
            console.log("Are you serious where i give you this input !??")
        }
        read1.close()    
    })
})