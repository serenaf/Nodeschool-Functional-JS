function duckCount() {
  var counter = 0;
  for (var arg in arguments) {
    var hasQuack = Object.prototype.hasOwnProperty.call(arguments[arg], 'quack');
    if(hasQuack) {
      counter++;
    }
    return counter;
}


}

module.exports = duckCount