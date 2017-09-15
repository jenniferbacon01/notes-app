
(function(exports) {
  function Controller(noteList, note = new Note("Favourite drink: seltzer")){
    this.noteList = noteList;
    this.noteList.add(note);
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
    console.log(this);
    var noteId = this._getNoteIdFromUrl(doc.location);
    var note = this._getNoteFromNoteId(noteId);
    console.log("hi");
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


  Controller.prototype.addNote = function () {
    var that = this;
    window.addEventListener("submit", function(event){
      event.preventDefault();
      console.log(event);
      console.log(event.target["0"].value)
    });
  }

  exports.Controller = Controller;

})(this);
