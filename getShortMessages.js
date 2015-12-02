function getShortMessages(messages) {
  var newArray = messages.map(function(obj) {
    return obj.message
  });
  .filter(function(obj) {
    return obj.length < 50;
  });
  return newArray;
}

module.exports = getShortMessages