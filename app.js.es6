class Person {

	construct(message) {

		this.message = message ;
	}

	display() {

		alert (`Hello returned ${this.message}`);
	}
}


let person = new Person ("Tejas");
console.log (person.display());