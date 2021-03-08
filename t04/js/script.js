let begin = +prompt("Entry begin of the range", '1');
let end = +prompt("Entry end of the range", '100');

if(!(+begin || +end)){
	console.log("Wrong range!!!");
	checkDivision();
}
else
	checkDivision(begin, end);

function checkDivision(beginRange = 1, endRange = 100){
	for(let i = beginRange; i <= endRange; i++){
		let str = "";

		str += i;
		if(i % 2 === 0 || i % 3 === 0 || i % 10 === 0)
			str += " is";
		else
			str += " -";

		if(i % 2 === 0)
			str += " even";
		if(i % 3 === 0){
			if(+str.length > 6)
				str += ",";
			str += " a multiple of 3";
		}
		if(i % 10 === 0){
			if(+str.length > 6)
				str += ",";
			str += " a multiple of 10";
		}

		console.log(str);
	}
}

