function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  


  const myFather = new Person("John", "Doe", 50, "blue");


  myFather.name = function() {
    return this.firstName + " " + this.lastName;
  };


console.log(myFather.name());
