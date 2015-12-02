function countWords(inputWords) {
  return inputWords.reduce( function( previousValue, currentValue, index, array ) {
    count = 1;

    if( currentValue in previousValue ) {
      count = previousValue[currentValue] + 1
    }

    previousValue[currentValue] = count;

    return previousValue;
  }, {} );
}

module.exports = countWords