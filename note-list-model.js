// var Note = require("./note-model").Note;

(function(exports) {
  function NoteList() {
    this.list = [];
  };
  NoteList.prototype.add = function(note) {
    this.list.push(note);
    // this.list.push(new Note(message));
  };

  NoteList.prototype.readList = function() {
    return this.list;
  };

  exports.NoteList = NoteList;
})(this);
