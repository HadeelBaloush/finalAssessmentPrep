//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....


function Player(name){
	var obj = {}
	var arrayOfPlayers = [];

	
	obj.info = {name: name}
	
	

	obj.addInfo = addInfo;
	obj.increaseLevel = increaseLevel;
	obj.isAvailable = isAvailable;
	obj.addPlayer = addPlayer;
	return obj;
}

function addInfo(age, position, level, availability){
	this.info.age = age;
	this.info.position = position;
	this.info.level = level;
	this.info.availability = availability;
}

function increaseLevel(n){
	this.info.level += n;
}

function isAvailable(){
	if(this.info.availability==="available")
		return true;
	else
		return false;
}

function addPlayer(){
	(this.arrayOfPlayers).push(this.info);
}

var player1 = Player("john");
var player2 = Player("abo treka");
var player3 = Player("messi");
var player4 = Player("ronaldo");

player1.addInfo(30, "defence", 2, "available");
player2.addInfo(25, "hojoom", 1, "not available");
player3.addInfo(19, "middle line", 0, "available");
player4.addInfo(35, "7ares", 6, "available");

///I know nothing about football :)

player1.addPlayer();
player2.addPlayer();
player3.addPlayer();
player4.addPlayer();

// function decreaseLevelIfYoung(arrayOfPlayers){
// 	this.arrayOfPlayers.forEach()
// }