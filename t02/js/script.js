let string = makeName();
if (string !== null) {
    alert(string);
}

function makeName() {
    let name, age, gender, description;

    if ((name = getName()) == null || (age = getAge()) == null || !(gender = getGender()) == null) {
        return null;
    }
    if (gender === `male` && +age < 18) {
        description = "boy";
    }
    if (gender === `male` && +age >= 18) {
        description = "man";
    }
    if (gender === `female` && +age < 18) {
        description = "girl";
    }
    if (gender === `female` && +age >= 18) {
        description = "woman";
    }   
    if (gender.length == 0 && +age < 18) {
        description = "kid";
    }
    if (gender.length == 0 && +age >= 18) { 
        description = "hero";
    }
    return `The superhero name is: ${name}-${description}!`;
}

function getName() {
    let superHeroName = prompt("What animal is the superhero most similar to?", '');
    if (!/^[A-Z]{1,20}$/ig.test(superHeroName)) {
        alert("Invalid animal input");
        return null;
    }
    return superHeroName;
}

function getAge() {
    let superHeroAge = prompt("How old is the superhero?", '');
    if (!(/^[1-9][0-9]{0,4}$/g.test(superHeroAge))) {
        alert("Invalid age input");
        return null;
    }
    return superHeroAge;
}

function getGender(){
    let superHeroGender = prompt("Is the superhero male or female? Leave blank if unknown or other.", '');
    if (!/^male$/i.test(superHeroGender) && !/^female$/i.test(superHeroGender) &&
    !/^$/.test(superHeroGender)) {
        alert("Invalid gender input");
        return null;
    }
    return superHeroGender.toLowerCase();
}