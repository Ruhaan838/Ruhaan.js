const os = require('os')
// get the user info
const user = os.userInfo()
console.log(user)
//get the uptime of the computer in seconds
console.log(`The Time is ${os.uptime()}`)
// setInterval(() => {
//     console.log(`The Time is ${os.uptime()}`)
// }, 1000);
const userfullinfo = {
    name:os.type(),
    installdate:os.release(),
    totalram:os.totalmem(),
    freeram:os.freemem()
}
console.log(userfullinfo)