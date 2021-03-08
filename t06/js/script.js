let firstName = prompt("Entry first name", '');
let lastName = prompt("Entry last name", '');

let checkName = isValid(firstName);
if(checkName == null){
	alert("Wrong input!!!");
	console.log("Wrong input!!!");
}
else{
	checkName = isValid(lastName);
	if(checkName == null){
		alert("Wrong input!!!");
		console.log("Wrong input!!!");
	}
	else
		texting(firstName, lastName);
}

function isValid(str){
	if(!(/^[a-z]+$/i.test(str)))
		return null;
	return 1;
}

function firstLetter(str){
	if(str.charAt(0) != str.charAt(0).toUpperCase())
		return str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

function texting(firstName, lastName){
	firstName = firstLetter(firstName);
	lastName = firstLetter(lastName);
	alert(firstName + " " + lastName);
	console.log(firstName, lastName);
}