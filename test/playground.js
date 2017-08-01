const path = require('path')
const arrandel = require('../index')

const arry = arrandel(path.join(__dirname, 'test.php'))
console.log(arry.config)
