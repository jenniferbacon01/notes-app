(function(exports) {
  var n = 0;

  function Note(message, id = n) {
    this.text = message;
    this.id = id;
    n ++;
  };


  Note.prototype.readText = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);
