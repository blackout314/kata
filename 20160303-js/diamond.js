var Diamond = function() {}

Diamond.prototype.create = function(type) {
  var lines = (this.findIndex(type) + 1) * 2 - 1;
  return this.createLines(type, lines);
}

Diamond.prototype.createLines = function (type, lines) {
  var output = [];
  for(var i = 0; i < lines; i++) {
    output.push(this.createLine(type, i));
  }
  return output;
}

Diamond.prototype.createLine = function(type, line){
  var len = this.length(type);
  var middle = len - 1;
  var computedLine = line > middle ? len-Math.abs(line-middle+1) : line
  
  var word = this.charAtIndex(computedLine);
  return this.pad(word, computedLine*2);
}

Diamond.prototype.pad = function(value, pad) {
  if(pad === 0)
    return value;
  else
    return value+ Array(pad).join(' ') + value;
}

Diamond.prototype.findIndex = function(char) {
  return char.charCodeAt(0) - 'A'.charCodeAt(0);
}

Diamond.prototype.length = function(char) {
  return this.findIndex(char) + 1;
}

Diamond.prototype.charAtIndex = function(index) {
  return String.fromCharCode('A'.charCodeAt(0) + index);
}