//Function constructor
/*
var john = {
    name: "John",
    yearOfBirth: 1990,
    job: "teacher"
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function(){
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name =  "john";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto,
{
    name: {value: "Jane"},
    yearOfBirth: {value: 1969},
    job: {value: "designer"}
});
*/

//primitives vs objects
/*
var a = 23;
var b = a;
a= 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: "John",
    age:26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: "Jonas",
    city: "Lisbon"
};

function change(a, b) {
    a = 30;
    b.city = "san Francisco";
}

    change(age, obj);
    console.log (age);
    console.log(obj.city);
*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i< arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >=18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <=81){
    return Math.round(206.9 - (0.67 *el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);*/

/*
function interviewQuestion(job){
    if(job === "designer"){
        return function(name){
            console.log(name + ", can you please explain what UX design is?");
        }
    } else if (job === "teacher") {
        return function(name) {
            console.log("What subject do you teach, " + name + "?");
        }    
    }else {
        return function(name) {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John");

interviewQuestion("teacher")("Mark");
*/
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >=5);
}
game();
*/
/*
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >=5-goodLuck);
})(1);

//console.log(score);
*/
/*
function retirement(retirementAge) {
    var a = " years left until retirement."
    return function(yearOfBirth){
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);;
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
*/
//retirement(66)(1990);
/*
function interviewQuestion(job){
    return function(name){
        if(job === "designer"){
            console.log(name + ", can you please explain what UX design is?");
        } else if (job === "teacher") {
            console.log("What subject do you teach, " + name + "?");
        }else {
            console.log("Hello " + name + ", what do you do?");            
        }
    }
}
interviewQuestion("teacher")("John");
*/
/*
var john = {
    name: "John",
    age: 26,
    job: "teacher",
    presentation: function(style, timeOfDay) {
        if (style === "formal"){
            console.log("Good " +timeOfDay + ", ladies and gentlemen! I\'m " + this.name + ", I\'m " + this.job + " and I\`m " + this.age + " years old."); 
        } else if (style === "friendly"){
            console.log("Hey! What\'s up? I\'m " + this.name + ", I\'m " + this.job + " and I\`m " + this.age + " years old. Have a nice " + timeOfDay + ".");
        }
    }
}
var emily = {
    name: "Emily",
    age: 35,
    job: "designer"
}

john.presentation("formal", "morning");

john.presentation.call(emily, "friendly", "afternoon");

//john.presentation.apply(emily, ["friendly", "afternoon"])

var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("afternoon");
*/

//coding challange
/*
(function(){
    var score = 0;
    var answers = [];
    var Question = function(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    }

    var firstQ = new Question("what does JS means?", ["0.JavaScript", "1.Nothing", "2.Java" ], 0);
    var secondQ = new Question ("Who is the most beautiful woman in the world?", ["0.Helen of Troy", "1.Cleopatra", "2.Beata Damianowa"], 2);
    var thirdQ = new Question ("Which coutry is the most beautiful in the World?", ["0.Norway", "1.Poland", "2.Germany"], 0)

    var questions = [firstQ, secondQ, thirdQ];

    var randQ = function(){
        var rand = Math.floor(Math.random() * questions.length);
        console.log(questions[rand].question);
        console.log(questions[rand].answers[0]);
        console.log(questions[rand].answers[1]);
        console.log(questions[rand].answers[2]);
        var answer = prompt("Please enter your answer, choose 0, 1 or 2");
        if (answer == questions[rand].correctAnswer){
            console.log("Correct!");  
            score++;
            console.log("Your score " + score);
            console.log("----------------------");
            randQ();         
        }
        else if(answer == "exit"){
            console.log("Thank you for your time");
        }
        else {
            score = 0;
            console.log("Wrong answer! GAME OVER");
            console.log("Your score " + score);
            console.log("----------------------");
            randQ();
        }
    };
    randQ();
})();
*/