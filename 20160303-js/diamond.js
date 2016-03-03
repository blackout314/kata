var Diamond = function() {}

Diamond.prototype.create = function(type) {
  var lines = type.length * 2 - 1;
  return this.createLines(type, lines);
}

  Diamond.prototype.createLines = function (type, lines) {
    var output = '';
    for(var i = 0; i < lines; i++) {
      output += this.createLine(type, i);
    }
    return output.substr(0, output.length-1);
  }

    Diamond.prototype.createLine = function(type, line){
      var len = type.length;
      var middle = len - 1;
      var computedLine = line > middle ? len-Math.abs(line-middle+1) : line

      var word = type[computedLine];
      return this.pad(word,computedLine*2)+'-';
    }

      Diamond.prototype.pad = function(value, pad) {
        if(pad === 0)
          return value;
        else
          return value+(Array(pad).join(' ') + value).slice(-pad);
      }
