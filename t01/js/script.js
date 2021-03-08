let num = 10;
let bigint = BigInt(9007199254740991);
let str = "Ucoode";
let bool = true;
let isNull = null;
let isUnderfined = undefined;
let obj = new Object();
let symbol = Symbol('symbol');
let func = function myFunc() {};

function allTypes(name, value) {
	if(value === null){
		alert(`${name} is null\n`);
	}
	else {
		alert(`${name} is ${typeof value}\n`);
	}
}

allTypes("num", num);
allTypes("bigint", bigint);
allTypes("str", str);
allTypes("bool", bool);
allTypes("isNull", isNull);
allTypes("isUnderfined", isUnderfined);
allTypes("obj", obj);
allTypes("symbol", symbol);
allTypes("func", func);