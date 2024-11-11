const fs = require("fs");
const crypto = require("crypto");
const { error } = require("console");

process.env.UV_THREADPOOL_SIZE = 2;

const start = Date.now();

setTimeout(() => {
  console.log("Timer 1 finished");
}, 0);

setImmediate(() => console.log("Immediate 1 finished"));
fs.readFile("test-file.txt", () => {
  console.log("IO finished");
  console.log("-------------");

  setTimeout(() => {
    console.log("Timer 2 finished");
  }, 0);
  setTimeout(() => {
    console.log("Timer 3 finished");
  }, 3000);

  setImmediate(() => console.log("Immediate 1 finished"));

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2Sync("password", "salt", 1000000, 64, "sha512");
  console.log(Date.now() - start, "Password encrypted");
  crypto.pbkdf2Sync("password", "salt", 1000000, 64, "sha512");
  console.log(Date.now() - start, "Password encrypted");
  crypto.pbkdf2Sync("password", "salt", 1000000, 64, "sha512");
  console.log(Date.now() - start, "Password encrypted");
  crypto.pbkdf2Sync("password", "salt", 1000000, 64, "sha512");
  console.log(Date.now() - start, "Password encrypted");
});

console.log("Hello form top level code");
