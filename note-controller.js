
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


  Controller.prototype.printElement = function() {
    var element = document.getElementById("app");
    // console.log(element);
    return element.innerHTML;
  };

  Controller.prototype.changeElement = function () {
    document.getElementById('app').innerHTML = "Howdy";
  };
  exports.Controller = Controller;

})(this);
