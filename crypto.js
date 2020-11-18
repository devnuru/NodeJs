// The Node.js Crypto module supports cryptography. It provides cryptographic functionality that includes a set of wrappers for open SSL's hash HMAC, cipher, decipher, sign and verify functions.

// What is Hash
// A hash is a fixed-length string of bits i.e. procedurally and deterministically generated from some arbitrary block of source data.

// What is HMAC
// HMAC stands for Hash-based Message Authentication Code. It is a process for applying a hash algorithm to both data and a secret key that results in a single final hash.

const crypto = require("crypto");

//Encryption Example using Hash and HMAC

// const secret = "abcdefg";
// const hash = crypto
//   .createHmac("sha256", secret)
//   .update("Welcome to Node Js crypto Built-in module!")
//   .digest("hex");
// console.log(hash);

//Encryption example using Cipher
// createCipher deprecated
const cipher = crypto.createCipher("aes192", "a password");
var encrypted = cipher.update(
  "Hello NodeJS built-in crypto module!",
  "utf8",
  "hex"
);
encrypted += cipher.final("hex");
console.log(encrypted);

//Decryption example using Decipher
const decipher = crypto.createDecipher("aes192", "a password");

var encrypted =
  "e98ecd6ee228ccc4a8333736f433825d5ca471dd005a9a4f6dc396d5bd95eafa06fb6dd6f780dbf56a415c2489303a5f";
var decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);
