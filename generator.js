var digitMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

var input = [2, 3, 6, 2, 3, 5];

function isWord(input){

    if(input.length === 0 || !input){
			return false;
    }
    
    var letters = [];
    var counter = [];    
    for(var i = 0; i < input.length; i++){
    	letters.push(digitMap[input[i]]);
      counter.push(0);
    }
    
    var isFinished = false;
    var count;
    var arr = [];
    while(!isFinished){
    	var str = "";
    	count += 1;
    	for(var j = 0; j < letters.length; j++){
      	str += letters[j][counter[j]];
      }
      counter[0] += 1;
      for(var k = 0; k < counter.length-1; k++){
      	if(counter[k] === letters[k].length){
        	counter[k] = 0;
          counter[k+1] +=1;
        }
      }
      arr.push(str);

      if(counter[counter.length-1] === letters[counter.length-1].length || count > 10000){
      	isFinished = true;
      }
    }
    
    return arr;
    
 } isWord(input);
