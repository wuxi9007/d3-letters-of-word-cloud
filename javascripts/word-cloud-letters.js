// Copyright (c) 2018 wuxi9007
// This is the API to render word patterns consisting of word clouds

function wordle(div, words, pattern) { 
  // 'div' is the div that renders the svg; 'words' is the bag of words for the word cloud; 'pattern' is the macro patter, i.e., if you want your word cloud to be "CLOUD", pattern should be "CLOUD".
	// words = shuffle(words);
  var divToRender = $('#' + div);
	var wordsList = processWords(words, pattern);
	var numOfLetters = pattern.length;
	// assign divs
	var numOfSpaces = 0;
	var numOfValidChars = countValidChars(pattern);
	for (var i = 0; i < numOfLetters; i++) {
		var letter = pattern.charAt(i);
		if (letter == ' ') {
			numOfSpaces++;
			if (i != 0 && pattern.charAt(i - 1) == ' ') {
			} else {
				numOfValidChars++;
				var spaceDivId = numOfSpaces - 1;
        var newLetterDiv = '<div class="'+ div + '-letter letter-block" style="width:' + 100.0/numOfValidChars + '%;" id="space-' + spaceDivId + '"></div>';
				divToRender.append(newLetterDiv);
			}
			continue;
		}
		var correctInd = i - numOfSpaces;
    var newLetterDiv = '<div class="'+ div + '-letter letter-block" style="width:' + 100.0/numOfValidChars + '%;" id="' + div + '-letter-' + correctInd + '"></div>';
		divToRender.append(newLetterDiv);
		var components = letterComponent[letter];
		for (var j = 0; j < wordsList[correctInd].length; j++) {
      var newComponent = '<div class="cloud-components component-' + components[j] + '" id="' + div + '-part-' + correctInd + '-' + j + '"></div>';
			$('#' + div + '-letter-' + correctInd).append(newComponent);
			d3.wordcloud(div + '-part-' + correctInd + '-' + j)
				.size(componentDiv[components[j]])
	      .fill(d3.scale.ordinal().range(["#C93756", "#BE90D4", "#4B77BE", "#F9690E", "#757D75", "#26A65B", "#e74c3c"]))
	      .words(wordsList[correctInd][j])
	      .onwordclick(function(d, i) {
	        if (d.href) { window.location = d.href; }
	      })
	      .start();
		}
	}
	if (numOfValidChars > 3) {
		$('.' + div + '-letter').each(function(){
			$(this).css('zoom', 3/numOfValidChars);
		});
	}
}

// count valid characters in the string
function countValidChars(pattern) {
	var numOfInvalidSpaces = 0;
	for (var i = 0; i < pattern.length; i++) {
		var letter = pattern.charAt(i);
		if (letter == ' ') {
			if (i != 0 && pattern.charAt(i - 1) == ' ') {
				numOfInvalidSpaces++;
			}
		}
	}
	return pattern.length - numOfInvalidSpaces;
}
// shuffle the array to get evenly distributed bags of words
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// split the words into different characters
function processWords(words, pattern) {
  var count = 0;
  var numOfBlocks = [];
  for (var i = 0; i < pattern.length; i++) {
  	if (pattern.charAt(i) == ' ') {
  	} else {
	  	count += letterHash[pattern.charAt(i)];
	  	numOfBlocks.push(letterHash[pattern.charAt(i)]);
  	}
  }
  var wordsList = splitUp(words, numOfBlocks, count);
  return wordsList;
}

// Assign bag of words to each character
function splitUp(arr, blockArr, n) {
    var rest = arr.length % n, // how much to divide
        restUsed = rest, // to keep track of the division over the elements
        partLength = Math.floor(arr.length / n),
        tmpResult = [],
        result = [],
        eachBlock = []; // for each letter of "IBI"
    for(var i = 0; i < arr.length; i += partLength) {
        var end = partLength + i,
            add = false;

        if(rest !== 0 && restUsed) { // should add one element for the division
            end++;
            restUsed--; // we've used one division element now
            add = true;
        }

        tmpResult.push(arr.slice(i, end)); // part of the array

        if(add) {
            i++; // also increment i in the case we added an extra element for division
        }
    }
    // tmpResult = [[], [], [], []] length of n
    var j = 0;
    var i = 0;
    var blockLimit = blockArr[j] - 1;
    while (i < tmpResult.length) {
    	eachBlock.push(tmpResult[i]);
    	if (i == blockLimit) {
    		result.push(eachBlock);
    		eachBlock = [];
    		j++;
    		if (j < blockArr.length) {
    			blockLimit += blockArr[j];
    		}
    	}
    	i++;
    }
    console.log(result);
    // result = [[[],[]...],[[],...],[[],...]] length of blockArr's length
    return result;
}