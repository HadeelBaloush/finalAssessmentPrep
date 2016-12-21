//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...





function makeFriend(name, age, education, nationality){
	
	var arrOfFriends = [];
	return{
		addFriend: function(name, age, education, nationality){
			arrOfFriends.push({
				name: name,
				age: age,
				education: education,
				nationality: nationality
			});
		},
		
		showFriend: function(friend){
			return friend.name + " with the age of " + friend.age + " and with " + friend.education + " education."
		},

		averageStudents: function(arrOfFriends){
			var sum =0;
			for (var i = 0; i < arrOfFriends.length; i++) {
				sum+=arrOfFriends[i].age;
			}
			return sum/arrOfFriends.length;
		}
	}
}



var rowaida = makeFriend("Roqaya", 24, "English literature", "Syria");

var roqaya = makeFriend("Roqaya", 24, "English literature", "Syria");










/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...

function square(x){
	return Math.pow(x,2);
}

function range(n,m){
	var arr=[];
	for (var i = n; i <= m; i++) {
		arr.push(i);
	}
	return arr;
}

function rangeSquared(n,m){
	return range(n,m).map(square);
}



/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....

function leader(arr){
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		var greater = true;
		for (var j = i+1; j < arr.length; j++) {
			if(arr[i]>arr[j])
				greater = greater && true;
			else
				greater = greater && false;
		}
		if(greater)
			res.push(arr[i]);
	}
	return res;
}

