
//Code goes here
function Person(name, numCats, numDogs, numLlamas){
	this.name = name;
	this.numCats = numCats;
	this.numDogs = numDogs;
	this.numLlamas = numLlamas;
	this.totalPets = function (){
		return this.numCats + this.numDogs + this.numLlamas;
	};
	this.poopScoopTime = function (){
		return this.totalPets() * 7 + ' minutes per day';
	};
	this.addPet = function (petType) {
		switch (petType) {	
			case 'cat': this.numCats++;
			break;
			case 'dog': this.numDogs++;
			break;
			case 'llama': this.numLlamas++; 
			break;
			default: this.newestPet = petType;
		};
	}
	this.aboutMe = function(){
		var string = this.name + ' you have ' + this.numCats + ' cats, ' + this.numDogs + ' dogs, and ' + this.numLlamas + ' llamas. You scoop poop for ' + this.poopScoopTime() + '.';
		x.innerHTML += string + "<br>";
	}
}


var primeClass = ['Clare', 'Rom', 'Kaitlin', 'Mary', 'Luke', 'Erik', 'Tracey', 'Michelle', 'Steve', 'Cody', 'Kelly', 'Chelsea', 'Casie', 'Brian', 'Alicia', 'Michael', 'Terry', 'Vince', 'Aaron', 'Jeanne', 'Scott', 'Joseph', 'Fred', 'Mark']

function populateClass (array) {	
	for (var i = 0; i < array.length; i++){
		array[i] = new Person(array[i], randomNumber(1, 100), randomNumber(1, 100), randomNumber(1, 100));
//		console.log('Dang ' + array[i].name + ' you spent ' + array[i].poopScoopTime() + ' scooping poop');
array[i].aboutMe();
}
return array;
}

var x = document.getElementById("dataGoesHere");

var primeClass = populateClass(primeClass);
//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}