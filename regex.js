var string = 'Welcome to Team simmer! Your number one source for online courses.'; 

RegExp.test(string); 
//returns true if string has a RegEx match & false otherwise. 

string.match(RegEx);
//returns an array of matched RegEx patterns in a string. 

string.replace(string); 

var regexString = '[sS](immer)';
var regex = new RegExp(regexString)

var regexLiteral = \/[sS](immer)\/gi;

regex.test(string); //returns true b/c regex is found in the string; 

string.match(regex) //null if no match. If match it will provide array
// first slot in array it will contain entire pattern in the array
// second contains the capturing group

string.replace(regex, ''); 

//reference capture group in the replace method: 
string.replacement(regex, 'S$1'); //$1 references first capturing group