var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],
    calculateAge: function(){
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);
