var database = [
	{
		username: "karthik",
		password: "1234"
	},
	{
		username: "dakshinya",
		password: "123"

	},
	{
		username: "teri maa",
		password: "143"
	}
];

var newsFeed = [
	{
		username: "hi ur mom ",
		timeline: "So tired from all that learning!"

	},
	{
		username: "hi i'm ur dad",
		timeline: "Javascript is a soooo coool!"
	},
	{
		username: "i'm ur daddy",
		timeline: "JavaScript is preetyy cool!"
	}

];


function isUserValid(usrname, password) {
	for (var i=0; i< database.length; i++){
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}

	}
	return false;

}

function signIn(username, password) {
	if(isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("sorry, wrong username and password");
	}
	
}
//var userNamePrompt = prompt("what's your username?");
//var passwordPrompt = prompt("What's your passowrd?");

	//if (user === database[0].username && 
	//	pass === database[0].password){
	//	console.log(newFeed);
	//} else {
	//	alert("Sorry,wrong username and password!");
	//}
//}

var userNamePrompt = prompt("what\'s your username?");
var passwordPrompt = prompt("What\'s your password");


signIn(userNamePrompt, passwordPrompt);



