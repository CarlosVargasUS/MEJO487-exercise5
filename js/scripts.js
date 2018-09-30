/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];

//Write your function here

//initialize a variable for the HTML content your going to build
var html ='';
//get the empty table content area
var tableContent = document.getElementById('table-content');
var x = document.getElementsByClassName("year");
function buildTable(){
  //start with the table header
  html += '<tr><th>First</th><th>Last</th><th>Position</th><th>Year</th></tr>';

  /*Now write a for loop to populate the table using the data
  /include logic to make the text bold when the player is a senior.
  Write the loop here*/

  for(i=0; i<players.length; i++){

    if(players[i].year == 'Senior'){
      html += '<tr><td class="bold">' + players[i].first + '</td>' +
      '<td class="bold">' + players[i].last + '</td>' +
      '<td class="bold">' + players[i].position + '</td>' +
      '<td class="bold">' + players[i].year + '</td>';
      html += '</tr>';
    }else{
      html += '<tr><td>' + players[i].first + '</td>' +
      '<td>' + players[i].last + '</td>' +
      '<td>' + players[i].position + '</td>' +
      '<td>' + players[i].year + '</td>';
      html += '</tr>';
    } 
  }

  /*Now, outside of the for loop, but still inside the entire buildTable function,
  use the tableContent and html variables to display the results in the empty tableArea 
 */
 tableContent.innerHTML = html;

}

buildTable();

/*
EXTRA CREDIT CHALLENGE (5 POINTS): Write a function that compares the list 
above with the list below, finds the players that made the All-State team, and displays a message with the results:
 "Congratulations to Springfield's 2018 
North Carolina All-State honorees: ____." Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/
var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
    {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
   {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
   {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
   first:'Darleen',
   last: 'Lawrence',
   position: 'Guard',
   school: 'Everton High School'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  school: 'Springfield High School'
  }
];

var results = document.getElementById('stars');
var fullNames = '';
function compare(){
  for(i=0; i<allStars.length; i++){
   for(j=0; j<players.length; j++){
     if(allStars[i].first == players[j].first){

      fullNames += players[j].first + ' '+ players[j].last + '<br>';
     }
   }
  }

  var text = 'Congratulations to Springfield' + 's ' + '2018 ' +
  'North Carolina All-State honorees: ' + fullNames +'.';

  results.innerHTML = text;
}

compare();