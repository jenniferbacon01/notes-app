(function(exports) {
  var n = 0;

  function Note(message) {
    this.text = message;
    this.id = n;
    n ++;
  };


  Note.prototype.readText = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);
