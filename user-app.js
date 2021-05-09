const Users = require('./TEST.js');
const github = require('./github.js')

async function showData() {
    let res = await Users.all();
    console.log(res.data);
}

console.log(github.getUser('hamtaro702'));
showData();
console.log('finished');