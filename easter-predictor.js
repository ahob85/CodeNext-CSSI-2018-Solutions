// Author: FirstName LastName
const READLINE = require("readline-sync");
var y = 2003;
console.log("y = " + y);
var a = y % 19;
console.log("a = " + a);
var b = parseInt(y / 100);
console.log("b = " + b);
var c = y % 100;
console.log("c = " + c);
var d = b / 4;
console.log("d = " + d);
var e = b % 4;
console.log("e = " + e);
var f = parseInt((b + 8) / 25);
console.log("f = " + f);
var g = parseInt((b - f + 1) / 3);
console.log("g = " + g);
var h = (19 * a + b - d - g + 15) % 30;
console.log("h = " + h);
var i = parseInt(c / 4);
console.log("i = " + i);
var k = c % 4;
console.log("k = " + k);
var r = (32 + 2 * e + 2 * i - h - k) % 7;
console.log("r = " + r);
var m = parseInt((a + 11 * h + 22 * r) / 451);
console.log("m = " + m);
var n = parseInt((h + r - 7 * m + 114) / 31);
console.log("n = " + n);
var p = parseInt((h + r - 7 * m + 114) % 31);
console.log("p = " + p);
var day = p + 1;
console.log("In " + y + ", Easter falls on " + n + "/" + day + ".");
READLINE.question("Press Enter key to exit.");
