// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 * While both functions perform the same task, counter1 is a function expression that uses the counterMaker() expression as a helper.
 * The count is initialized within the helper function.
 * By contrast, counter2 is a function expression that uses closure. Count is initialized outside of counter2.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * Counter2 uses closure because count is initialized outside of the expression. In order for count to be read inside it,
 * counter2 has to look for count outside of its scope.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 * When you want to put helper functions at the top of a document, use function expressions, and include hoisting, counter1 is better.
 *
 * When you want to make the count variable available to other functions without redefining it each time, counter2 would be better.
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning.
 This should be a whole number between 0 and 2. */

function inning() {
  const points = Math.floor(Math.random() * 3);
  return points;
}

console.log("\nTask 2:", inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above)
 and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

let Home = 0;
let Away = 0;
function finalScore(inning, totalInnings = 9) {
  if (totalInnings == 0) return { Home, Away };

  (Home += inning()), (Away += inning());
  return finalScore(inning, totalInnings - 1);
}

console.log("\nTask 3:", finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

let homeTeam = 0;
let awayTeam = 0;
let currentInning = 0;

function ordinal_suffix_of(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) return i + "st";
  if (j == 2 && k != 12) return i + "nd";
  if (j == 3 && k != 13) return i + "rd";
  return i + "th";
}

function getInningScore(inning) {
  let roundHome = inning();
  homeTeam += roundHome;
  let roundAway = inning();
  awayTeam += roundAway;
  currentInning += 1;

  console.log(
    `${ordinal_suffix_of(currentInning)} inning: ${awayTeam} - ${homeTeam}`
  );
}

console.log("\nTask 4:");

function scoreboard(getInningScore, inning, totalInnings = 9) {
  if (totalInnings == 0) {
    return `Final Score: ${awayTeam} - ${homeTeam}`;
  }

  getInningScore(inning);

  return scoreboard(getInningScore, inning, totalInnings - 1);
}

console.log(scoreboard(getInningScore, inning, 9));
