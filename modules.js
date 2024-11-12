const C = require("./test-module");

// console.log(arguments);
// console.log(require("module").wrapper);

// modle.exports
const calc1 = new C();
console.log(calc1.add(2, 9));

// export
// const calc2 = require("./test-module-2");
const { add, multipy, divide } = require("./test-module-2");
console.log(add(2, 4));
console.log(multipy(2, 4));
console.log(divide(2, 4));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
