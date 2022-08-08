/*************
 * PROJECT 1 *
 *************/


// class Media {
//     constructor(title){
//       this._title = title
//       this._isCheckedOut = false
//       this._ratings = []
//     }
//     get title(){
//       return this._title;
//     }
//     get isCheckedOut(){
//       return this._isCheckedOut;
//     }
//     get ratings(){
//       return this._ratings;
//     }
//     toggleCheckOutStatus(){
//       return this.isCheckedOut = !this.isCheckedOut;
//     }
//     getAverageRating(){
//       let sum = this._ratings.reduce((previous, current) => previous + current, 0);
//       let lengthArray = this.ratings.length
//       return sum / lengthArray;
      
//     }
//     addRating(rating){
//        this._ratings.push(rating);
//     }
//     set isCheckedOut(checkedOut){
//       this._isCheckedOut = checkedOut;
//     }
//   }
  
// class Book extends Media {
// constructor(author, title, pages){
//     super(title)
//     this._author = author;
//     this._pages = 0;
// }
// get author(){
//     return this._author;
// }
// get pages(){
//     return this._pages;
// }
// }
 
// class Movie extends Media {
// constructor (director, runTime){
//     super(director, runTime)
//     this._director = director;
//     this._runTime = runTime
// }
// get director(){
//     return this._director;
// }
// get runTime(){
//     return this._runTime;
// }
// }
  
// const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
// historyOfEverything.toggleCheckOutStatus();
// console.log(historyOfEverything.isCheckedOut);
// historyOfEverything.addRating(4);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(5);
// console.log(historyOfEverything.getAverageRating());

// const speed = new Movie('Jan de Bont', 'Speed', 116);
// speed.toggleCheckOutStatus();
// console.log(speed.isCheckedOut);
// speed.addRating(1);
// speed.addRating(1);
// speed.addRating(5);
// console.log(speed.getAverageRating())




/*************
 * PROJECT 2 *
 *************/


// class School {
// constructor(name, level, numberOfStudents){
//     this._name = name
//     this._level = level
//     this._numberOfStudents = numberOfStudents
// }
// get name(){
//     return this._name;
// }
// get level(){
//     return this._level;
// }
// get numberOfStudents(){
//     return this._numberOfStudents;
// }
// set numberOfStudents(num){
//     if (typeof num === 'number') {
//     this._numberOfStudents = num
//     } else {
//     console.log('Invalid input: numberOfStudents must be set to a Number.')
//     }
// }
// quickFacts(){
//     console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
// }
// static pickSubstituteTeacher(substituteTeachers){
//     let random = Math.floor(substituteTeachers.length * Math.random());
//     console.log(substituteTeachers[random])
// }
// }

// class PrimarySchool extends School{
// constructor(name, numberOfStudents, pickupPolicy){
//     super(name, 'primary', numberOfStudents)
//     this._pickupPolicy = pickupPolicy
// }
// get pickupPolicy(){
//     return this._pickupPolicy
// }

// }

// class HighSchool extends School {
// constructor(name, numberOfStudents, sportsTeam){
//     super(name, 'high', numberOfStudents);
//     this._sportsTeam = sportsTeam;
// }
// get sportsTeam(){
//     return this._sportsTeam;
// }
// };

// const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

// lorraineHansbury.quickFacts(); 
// School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

// const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

// console.log(alSmith.sportsTeam);

/*************
 * PROJECT 3 *
 *************/


//I had to create a new file which is messageMixer-project, since this project needs more than 1 file to execute.


/*************
 * PROJECT 4 *
 *************/

//I had to create a new file which is workAroundModule, since this project needs more than 1 file to execute.
