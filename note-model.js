(function(exports) {
  function Note(message) {
    this.text = message;
  };
  Note.prototype.readText = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);
