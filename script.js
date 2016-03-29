// Global Variables:
var states = ["New Jersey", "Alaska", "Phoneix, Arizona", "Colorado", "Route 20", "Louisana", "Maine"];
var correctAnswer = prompt("Correct! The answer is function()");
var incorrectAnswer = prompt("Incorrect! Sorry, the answer is function()");

function question1() {
   var userInput = document.getElementById("q1input").value;
   if (userInput == states[0]) {
      prompt("Correct! The answer is function()");
   }
}





// Question 1:
// Excluding sovergn territories, this US State experiences the highest level of population densitiy in the union:
// If answer is New Jersey, prompt "Correct! Thanks to it's proximity between New York City and Philadelphia, the Garden State has a population density of 1,210/sqmi, beating out Rhode Islandy by nearly 200 people/sqmi."
// If else, prompt "Oops..sorry! The correct answer is 'New Jersey'. Thanks to it's proximity between New York City and Philadelphia, the Garden State has a population density of 1,210/sqmi, beating out Rhode Islandy by nearly 200 people/sqmi."

// Question 2:
// This state occupies the largest total area of water per square mile within its boarder:
// If answer is Alaska, prompt, "Bingo!" Given it's proximity to the arctic circle, Alaska contains around 94,700 sq/mi of water. The runner-up, Michigan, contains around 40,100 sq/mi of water within its boarders."
// If else, prompt "Answer is incorrect. The correct answer is Alaska. Given it's proximity to the arctic circle, Alaska contains around 94,700 sq/mi of water. The runner-up, Michigan, contains around 40,100 sq/mi of water within its boarders."

// Question 3:
// With a population of nearly 1.5 million, this state capital ranks #1 for having the largest municiple population of any state capital in the union:
// If answer is Phoenix or Phoenix, Arizona, prompt: "Right on! Phoenix' population is the largest state capital in the union. Montpelier, Vermont by contrast has a municiple population of less than 8,000."
// If else, prompt: "Ohhh...sorry hombre! The correct answer is Phoenix, Arizona. Montpelier, Vermont by contrast has a municiple population of less than 8,000."

// Question 4: At 6,800 feet, this state tops the list for having the highest mean elevation in the union.
// If answer is Colorado, prompt: "YESSSS!!! Colorado narrowly beats neighoring Wyoming for having the tallest average elevation by just 100 feet."
// If else, prompt: "Sorry, the correct answer is Colorado. This state narrowly beats neighoring Wyoming for having the tallest average elevation by just 100 feet."

// Question 5:
// This highway, which touches both the Pacific and Atlantic coast lines, is the longest continual highway in the United States. Name that highway:
// If answer is "US Route 20" or "Route 20", prompt "Correct! US Route 20 intersects through twelve states and 3,365 miles."
// If else, prompt "Answer is incorrect. The correct answer is US Route 20. This highway intersects through twelve states and 3,365 miles."

// Bonus: List every state that US Route 20 travels through. Each correct state listed garners a bonus of 2 points per answer.
// List array: Oregon, Idaho, Montana, Wyoming, Nebraska, Iowa, Illinois, Indiana, Ohio, Pennyslvania, New York, Massachusetts.

// Question 6:
// With a mean of 63 inches of precipiation per annum, Hawaii receives the most rain or snowfall of any US state. Its runner-up recives a mean of 60 inches of annual precipition. Name that runner up:
// If answer is "Louisana", prompt: "Correct!"
// If else, prompt: "Oh no...so sorry. The correct answer is 'Louisana.'"

// Question 7:
// This state is only one to share a boarder with a single neighboring state. Name that state:
// If answer is, "Maine", prompt: "Wonderful! Maine shares it's land boarder with, and only with, New Hampshire."
// If else, prompt: "Oh no! Sorry, the correct answer is Maine. Maine shares it's land boarder with, and only with, New Hampshire."

// Question 8:
//
