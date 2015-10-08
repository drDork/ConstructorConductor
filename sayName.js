//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age){
	this.name = name; 
	this.age = age;
	this.sayName = function(){
		alert(this.name);
	};
}


//Now create three instances of Person with data you make up

 var person1 = new Person('bob', 43);
 var person2 = new Person('martin', 73);
 var person3 = new Person('nathan', 7);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

person1.sayName();