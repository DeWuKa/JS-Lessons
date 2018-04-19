
var years = [1990, 1992, 1994, 1996, 1998];
var years2 = [1990, 1993, 1999, 1980, 1995];

var newYears = new Array();

function printFullAge(years){
    var ages = [];

    for(var i = 0; i<years.length; i++){
        newYears[i] = 2018-years[i];
    }
    
    for(var i = 0; i<newYears.length; i++){
        if (newYears[i] >= 25){
            console.log("Person number " + i + " is adult");
            ages.push(true);
        } else {
            console.log("person number " + i + " is young");
            ages.push(false);
        }
    }
    return ages;
}
var full_1 = printFullAge(years);
var full_2 = printFullAge(years2);