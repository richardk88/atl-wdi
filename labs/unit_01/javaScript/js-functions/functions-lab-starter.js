// Question 1
function maxOfTwoNumbers(x, y) {
	if (y > x) {
		return y;
	} else {
		return x;
	}
}

// Question 2
function maxOfThree(x, y, z) {
	if (z > y && z > x) {
		return z;
	} else if (y > x && y > z) {
		return  y;
	} else if (x > y && x > z) {
		return x;
	}
}

// Question 3
function isCharacterAVowel(word) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	if (vowels.indexOf(word) !== -1) {
		return true;
	} else {
		return false;
	}
}

// Question 4
function sumArray(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}


// Question 4
function multiplyArray(array) {
	var product = [0];
	for (var i = 1; i < array.length; i++) {
		product *= array[i];
	}
	return product;
}


// Question 5
var numberOfArguments = function(){
	return arguments.length;
}



// Question 6
var reverseString = function (string){
	return string.split('').reverse().join('');
};


// Question 7
function findLongestWord (array) {
  var longestWord = "";
  for (var i = 0; i < array.length; i++) {
  	if (array[i].length > longestWord.length) {
  		longestWord = array[i];
  	}
  }
  return longestWord;
}


// Question 8
function filterLongWords (array, j) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i].length > j) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
