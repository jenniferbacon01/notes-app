
(function(exports) {
  function Controller(noteList){
    this.noteList = noteList;
    // this.noteList.add(note);
    // console.log(this.noteList.list[0].id);
    this.noteListView = new NoteListView(this.noteList);
  };

  Controller.prototype.showNoteListView = function(doc = document) {
    doc.getElementById('app').innerHTML = this.noteListView.view();
  };

  // var _getNoteFromNoteId = function (noteId){
  //   var currentNote;
  //   this.noteList.list.forEach( function(note){
  //       if (note.id === noteId){
  //         currentNote = note;
  //       };
  //     });
  //   return currentNote;
  // };
  //
  // var _getNoteIdFromUrl = function(location) {
  //   return parseInt(location.hash.split("#")[1].substring(6));
  // };

  Controller.prototype._getNoteFromNoteId = function (noteId){
    var currentNote;
    this.noteList.list.forEach( function(note){
        if (note.id === noteId){
          currentNote = note;
        };
      });
    return currentNote;
  };

  Controller.prototype._getNoteIdFromUrl = function(location) {
    return parseInt(location.hash.split("#")[1].substring(6));
  };

  Controller.prototype.showSingleNoteView = function(doc = document) {
    var noteId = this._getNoteIdFromUrl(doc.location);
    var note = this._getNoteFromNoteId(noteId);
    var singleNoteView = new SingleNoteView(note);
    doc.getElementById('app').innerHTML = singleNoteView.createHtmlELement();
  };


  //

  Controller.prototype.makeUrlChangeShowNoteForCurrentPage = function(){
    var that = this;
    var a = function() {
      that.showSingleNoteView();
    }
    window.addEventListener("hashchange", a);
  };


  Controller.prototype.addNote = function (win = window, doc = document) {
    var that = this;
    win.addEventListener("submit", function(event){
      console.log(event.target["0"].value);
      var newNote = new Note(event.target["0"].value);
      that.noteList.add(newNote);
      that.showNoteListView();
      event.preventDefault();
    });
  }

  exports.Controller = Controller;

})(this);
