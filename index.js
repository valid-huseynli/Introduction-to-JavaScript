/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge=19;

console.log(votingAge>18? true : false);



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let firstNum = 1;
firstNum = 2;
console.log(firstNum);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(parseInt("1999"))



//Task d: Write a function to multiply a*b 

const multiply = (a,b) => a * b;
console.log(multiply(3,5));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogAge(age) {
    var dogYears = 7*age;
    console.log(dogYears);
}
dogAge(1);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

let dogAge = 0.4 , dogWeight = 10;


const dogFeed = (dogAge,dogWeight) => {

    if(dogAge>1){

        if(dogWeight<5){
            return (dogWeight*5)/100
        }else if(dogWeight>5 && dogWeight<11){
            return (dogWeight*4)/100
        }else if(dogWeight>10 && dogWeight<16){
            return (dogWeight*3)/100
        }else{
            return (dogWeight*2)/100
        }

    }else{
        if(dogAge>0.1 && dogAge<0.5){
            return (dogWeight*10)/100
        }else if(dogAge>0.3 && dogAge<0.8){
            return (dogWeight*5)/100
        }else{
            return (dogWeight*4)/100
        }

    }

} 


console.log(dogFeed(dogAge,dogWeight) + " pounds")

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
let dogAge = 12, dogWeight = 15;


const dogFeed = (dogAge,dogWeight) => {

    if(dogAge>1){

        if(dogWeight<5){
            return (dogWeight*5)/100
        }else if(dogWeight>5 && dogWeight<11){
            return (dogWeight*4)/100
        }else if(dogWeight>10 && dogWeight<16){
            return (dogWeight*3)/100
        }else{
            return (dogWeight*2)/100
        }

    }else{
        if(dogAge>0.1 && dogAge<0.5){
            return (dogWeight*10)/100
        }else if(dogAge>0.3 && dogAge<0.8){
            return (dogWeight*5)/100
        }else{
            return (dogWeight*4)/100
        }

    }

} 


console.log(dogFeed(dogAge,dogWeight) + " pounds")



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  
let choices = ["Rock", "Paper", "Scissors"];

const game = (userInput) => {
  let computerGuess = choices[Math.floor(Math.random() * Math.floor(3))];
  console.log(`Your Choice: ${userInput}\nComputer Choice: ${computerGuess}\n`)

  if (userInput === choices[0]) {
    //user input Rock

    if (computerGuess === choices[0]) {
      //computer input Rock
      return "Game is tight";
    } else if (computerGuess === choices[1]) {
      //computer input Paper
      return "Computer won";
    } else {
      //computer input Scissors
      return "You won";
    }
  } else if (userInput === choices[1]) {
    //user input Paper

    if (computerGuess === choices[0]) {
      //computer input Rock
      return "You won";
    } else if (computerGuess === choices[1]) {
      //computer input Paper
      return "Game is tight";
    } else {
      //computer input Scissors
      return "Computer won";
    }
  } else if (userInput === choices[2]) {
    //user input Scissors
    if (computerGuess === choices[0]) {
      //computer input Rock
      return "Computer won";
    } else if (computerGuess === choices[1]) {
      //computer input Paper
      return "You won";
    } else {
      //computer input Scissors
      return "Game is tight";
    }
  } else {
    return "Please enter a valid choice";
  }
};

let userInput = "Rock";
console.log(game(userInput));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let KM = 1;
let mile = KM/1.6;
console.log(mile + ` mile`);





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let feet = 1;
let CM = feet/30.5;
console.log(feet + ` feet`);




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(times){
    for (let i = times; i >=1; i--){
      console.log (i+ " bottle of soda on the wall," + i + " bottles of soda, take one down pass it around " + (i-1 ) + " bottles of soda on the wall");
    }
  }
  console.log(annoyingSong(5));




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function gradeCalculator(grade){
    if (grade<= 100 && grade >=90){
      return `A`;
    }
    else if (grade<= 89 && grade >=80){
       return `B`;
    }
  else if (grade<= 79 && grade >=70){
    return `C`;
  }
    else if (grade<= 69 && grade >=60){
    return `D`;
  }
    else{
      return `F`;
    }
  }
      
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





