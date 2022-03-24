// PROJECTS FROM THE COURSE 'LEARN JAVASCRIPT' ON CODECADEMY!


// /*********
//  PROJECT 1
//  *********/

// let kelvin = 293;
// //this is the temperature today

// let celsius = kelvin - 273;
// //this is the temperature in celcius

// var fahr = celsius * (9/5) + 32
// //this is the code to find the temperature in fahrenheit

// fahr = Math.floor(fahr);
// //this is to round the number

// console.log(`The remperature is ${fahr} degrees Fahrenheit`)

// var newton = Math.floor(celsius * (33/100))
// console.log(`The temperature is ${newton} degrees in Newton`)

// /*********
//  PROJECT 2
//  *********/

// let myAge = 29;
// //that's my age
// var earlyYears = 2
// //i don't know, they just asked me to create this variable
// earlyYears *= 5;
// var laterYears = myAge - 2;
// //its substracting 2 to my age
// laterYears *= 4;
// //its multiplying ans assigning lateryears * 4.
// var myAgeInDogYears = earlyYears + laterYears
// //that's my age in dog years
// var myName = 'Rafaela'.toLowerCase()

// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


// /*********
//  PROJECT 3
//  *********/

//  let userName = 'Rafaela';
// (userName ? console.log(`Hello, ${userName}`) : console.log('Hello!'))
// /*OR
// if (userName != ''){
//   console.log(userName)
// } else {
//   console.log('Hello!')
// }*/

// let userQuestion = 'Can you answer my question?';
// console.log(`${userName} asked: '${userQuestion}'`)

// let randomNumber = Math.floor(Math.random() * 8);
// let eightBall = '';

// switch (randomNumber) {
//   case 1:
//   eightBall = 'It is certain';
//   break;
//   case 2:
//   eightBall = 'It is decidedly so';
//   break;
//   case 3:
//   eightball = 'Reply hazy try again'
//   break;
//   case 4:
//   eightBall = 'Cannot predict now';
//   break;
//   case 5:
//   eightBall = 'Do not count on it';
//   break;
//   case 6:
//   eightBall = 'My sources say no';
//   break;
//   case 7:
//   eightBall = 'Outlook not so good';
//   break;
//   case 8:
//   eightBall = 'Signs point to yes';
//   break;
// }
// console.log(eightBall)

// /*********
//  PROJECT 4
//  *********/

//  let raceNumber = Math.floor(Math.random() * 1000);

// let registerEarly = true;
// let runnerAge = 18;
// if (registerEarly && runnerAge >= 18){
//   raceNumber += 1000
// }
// if (runnerAge > 18 && registerEarly) {
//   console.log(`Your race starts at 9:30, and youir number is ${raceNumber}.`)
// } else if (!registerEarly && runnerAge > 18) {
//   console.log(`Your race will start at 11:00am, and your number is ${raceNumber}.`)
// } else if (runnerAge < 18) {
//   console.log(`Your race will start at 12:30, and your number is ${raceNumber}.`)
// } else {
//   console.log('See the registration desk.')
// }


// /*********
//  PROJECT 4
//  *********/


//  const getUserChoice = userInput => {
//     userInput = userInput.toLowerCase();
  
//     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
//       return userInput;
//     } else {
//       console.log('ERROR, type a valid choice: rock, paper or scissors')
//     }
//   }
//   // console.log(getUserChoice('paper'))
  
//   const getComputerChoice = () => {
//     var number = Math.floor(Math.random() * 3);
//     if (number === 0) {
//       return 'rock';
//     } else if (number === 1) {
//       return 'paper';
//     } else {
//       return 'scissors';
//     }
//   }
//   // console.log(getComputerChoice())
  
//   const determineWinner = (userChoice, computerChoice) => {
//     if (userChoice === 'bomb') {
//       return 'USER WON!'
//     }
//     if (userChoice === computerChoice) {
//       return 'It\'s a tie!'
//     }
//     if (userChoice === 'rock'){
//       if (computerChoice === 'paper'){
//         return 'Computer won!'
//       } else {
//         return 'User won!'
//       }
//     }
//     if (userChoice === 'paper') {
//       if (computerChoice === 'rock') {
//         return 'User won!'
//       } else {
//         return 'Computer won!'
//       }
//     }
//     if (userChoice === 'scissors'){
//       if (computerChoice === 'rock') {
//         return 'computer won!'
//       } else {
//         return 'User won!'
//       }
//     }
//   }
  
//   const playGame = () => {
//     let userChoice = getUserChoice('paper')
//     console.log('You threw: ' + userChoice)
//     let computerChoice = getComputerChoice();
//     console.log('The computer threw: ' + computerChoice)
  
//     console.log(determineWinner(userChoice, computerChoice))
//   };
  
//   playGame();
  
// /*********
//  PROJECT 5
//  *********/

//   const getSleepHours = (day) => {
//     switch (day) {
//       case 'monday':
//         return 8;
//         break;
//       case 'tuesday':
//         return 9;
//         break; 
//       case 'wednesday':
//         return 7;
//         break;
//       case 'thuersday':
//         return 6;
//         break;
//       case 'friday':
//         return 6;
//         break;
//       case 'saturday':
//         return 10;
//         break;
//       case 'sunday':
//         return 8;
//         break;                            
//     }
//   }
  
//   const getActualSleepHours = () => {
//     return getSleepHours('monday') +  getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thuersday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
    
//   }
  
//   const getIdealSleepHours = () => {
//     idealHours = 8;
//     return idealHours * 7
//   }
  
//   const calculateSleepDebt = () => {
//     let actualSleepHours = getActualSleepHours();
//     let idealSleepHours = getIdealSleepHours();
  
//     if (actualSleepHours === idealSleepHours) {
//       console.log(`${actualSleepHours}, good job! You got the perfect amount of sleep!`)
//     } else if (actualSleepHours > idealSleepHours) {
//       console.log(`${actualSleepHours}?! Hmmm seems like you\'re sleeping more than you should...`)
//     } else {
//       console.log(`${actualSleepHours} is not enought! Go get some rest.`)
//     }
//   }
  
//   calculateSleepDebt();
    
  
//   /*********
//  PROJECT 6
//  *********/

//  const getRandEvent = () => {
//     const random = Math.floor(Math.random() * 3);
  
//     if (random === 0) {
//       return 'Marathon';
//     } else if (random === 1) {
//       return 'Triathlon';
//     } else if (random === 2) {
//       return 'Pentathlon';
//     }
//   };
   
//   const getTrainingDays = event => {
//     let days 
//     if (event === 'Marathon') {
//       days = 50;
//     } else if (event === 'Triathlon') {
//       days = 100;
//     } else if (event === 'Pentathlon') {
//       days = 200;
//     }
  
//     return days;
//   };
  
//   const name = 'Nala'
//   const logEvent = (name, event) => {
//     console.log(`${name}'s event is: ${event}`);
//   };
  
//   const logTime = (name, days) => {
//     console.log(`${name}'s time to train is: ${days} days`);
//   };
  
//   const event = getRandEvent();
//   const days = getTrainingDays(event);
//   // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
//   logEvent(name, event);
//   logTime(name, days);
  
//   const event2 = getRandEvent();
//   const days2 = getTrainingDays(event2);
//   const name2 = 'Warren';
   
//   logEvent(name2, event2);
//   logTime(name2, days2);

// /*********
//  PROJECT 7
//  *********/

//  let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//  secretMessage.pop()
//  console.log(secretMessage.length)
 
//  secretMessage.push('to', 'Program')
//  let oldWordIndex = secretMessage.indexOf('easily')
//  secretMessage[oldWordIndex] = 'right';
 
//  secretMessage.shift();
//  secretMessage.unshift('Programming');
 
//  let firstIndex = secretMessage.indexOf('get');
//  secretMessage.splice(firstIndex, 5, 'know')
 
//  console.log(secretMessage.join(' '))

 
// /*********
//  PROJECT 8
//  *********/

//  let input = 'turpentine and turtles'; //need to set this to lowercase?
//  const vowels = ['a', 'e', 'i', 'o', 'u'];
//  let resultArray = [];
 
//  for (var i = 0; i < input.length; i++){
//    if (input[i] === 'e' || input[i] === 'u') {
//      resultArray.push(input[i]);
//    }
//    for (var x = 0; x < vowels.length; x++){
//      if (input[i] === vowels[x]) {
//        resultArray.push(input[i]);
//      }
//    }
//  }
//  let resultString = (resultArray.join('')).toUpperCase();
 
//  console.log(resultString)


 /*********
 PROJECT 9
 *********/

// let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// let overusedWords = ['really', 'very', 'basically'];

// let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// let storyWords = story.split(' ');
// let unnecessaryWordsSplit = unnecessaryWords.slice(' ');

// // console.log(storyWords.length)
// let betterWords = storyWords.filter(words => !unnecessaryWords.includes(words))

// var really = 0;
// var very = 0;
// var basically = 0;

// for (var i = 0; i < storyWords.length; i++) {
//   if (storyWords[i] === overusedWords[0]) {
//     really++;
//   } else if (storyWords[i] === overusedWords[1]) {
//     very++;
//   } else if (storyWords[i] === overusedWords[2]) {
//     basically++;
//   }
// } 
// // console.log(really)
// // console.log(very)
// // console.log(basically)

// var counter = 0;
// for (var i = 0; i < story.length; i++) {
//   if (story[i] === "." || story[i] === "!") {
//     counter++
//   }
// } //console.log(counter)


// var allWords = really + very + basically

// const allTogether = (count, sentence, overused) => {
//   console.log("There are " + count + " words in this story")
//   console.log("There are " + sentence + " sentences in this story")
//   console.log("There is a total of " + overused + " overused words together")
// }


// allTogether(counter, storyWords.length, allWords)

 
 /*********
 PROJECT 10
 *********/
 
 
//  let spaceship = {
//   crew: {
//     captain: { 
//       name: 'Lily', 
//       degree: 'Computer Engineering', 
//       cheerTeam() { console.log('You got this!') } 
//     },
//     'chief officer': { 
//       name: 'Dan', 
//       degree: 'Aerospace Engineering', 
//       agree() { console.log('I agree, captain!') } 
//     },
//     medic: { 
//       name: 'Clementine', 
//       degree: 'Physics', 
//       announce() { console.log(`Jets on!`) } },
//     translator: {
//       name: 'Shauna', 
//       degree: 'Conservation Science', 
//       powerFuel() { console.log('The tank is full!') } 
//     }
//   }
// }; 
 
// // for...in
// for (let crewMember in spaceship.crew) {
//   console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }

 
 
 /*********
 PROJECT 11
 *********/

const menu = {
  _courses: { 
    appetizers:[], 
    mains:[], 
    desserts:[] 
    },

  get appetizers(){
    return this._courses.apperizers;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },

  get mains(){
    return this._course.mains;
  },
  set mains(mains){
    this._course.mains = mains;
  },

  get desserts(){
    return this._courses.desserts;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },
  get _courses() {
    return {     //RangeError: Maximum call stack size exceeded ---- i dont know why
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };

   
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: this.dishName,
      price: this.dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const index = Math.floor(Math.random() * dishes.length)
    return dishes[index];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your course is: ${appetizer.name} for an appetizer, ${main.name} for main plate and ${dessert.name} for dessert.Your total is ${totalPrice}.`;
  }
};


menu.addDishToCourse('appetizers', 'tatertots', 4.44);
menu.addDishToCourse('appetizers', 'chicken wings', 7.00);
menu.addDishToCourse('appetizers', 'salad', 6.50);

menu.addDishToCourse('mains', 'feijoada', 30.33);
menu.addDishToCourse('mains', 'lazanha', 25.00);
menu.addDishToCourse('mains', 'strogonoff', 18.90);

menu.addDishToCourse('desserts', 'brigadeiro', 3.50);
menu.addDishToCourse('desserts', 'bolo', 5.00);
menu.addDishToCourse('desserts', 'pudim', 4.75);

const meal = menu.generateRandomMeal();
console.log(meal)
