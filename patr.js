var calcScore = function(array){
    var sum = 0;
    array.forEach(function(a){
            if (a==5){
            sum+=4;
            } else if (a==3){
            sum+=2;
            }
            });

    return sum;
}

var displayResult = function(input, array){
    var result = calcScore(array);
    if (input == result){
        return "You are right!";
    } else {
        return "Oops! It should be " + result;
    }
}
