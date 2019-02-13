//Variables

let car ={
	make: 'hotwheels',
	model:'Skull',
	color:'orange',
	mileage:0,
	isWoring: true,

	driveTowork(){
		alert('Old mileage: $(this.mileage)');
		this.mileage = this.mileage + 8;
		alert('New mileage: $(this.mileage)');
	},
}


//Functions
	Const rewritestats(){

	}



/*Captures keyboard input. Depending on the letter pressed it
will "call" (execute) different functions.*/
document.onkeyup = (event) => {

	//Captures the key press, converts it to a lowercase, and saves it to a variable.
	let letter = string.fromCharcode(event.Keycode).tolowercase();

	if(letter === 'd'){
		car.driveTowork();
		rewritestats();
	}
}
