(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
    this.stringpart = "";

  };
  NoteListView.prototype.view = function() {
    var stringpart = "";
    this.noteList.list.forEach(function(note){

      stringpart+=("<li><div><a href='#notes/"+ note.id + "'>" + note.text.slice(0,20) + "</a></div></li>");

  });
    return ("<ul>" + stringpart + "</ul>");
  };
  exports.NoteListView = NoteListView;
})(this);
