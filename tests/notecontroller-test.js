(function(exports) {
  function testNoteController() {
    function DocumentDouble() {
      this.tags = {};
    }
    function Tag(){
      this.innerHTML = ""
    }
    DocumentDouble.prototype.getElementById = function (id) {
      if (!(id in this.tags)) {
        this.tags[id] = new Tag();
      };
      return this.tags[id];
    };
    var documentDouble = new DocumentDouble()
    var note = {text:"Favourite drink: seltzer", id: 0};
    var noteList = new NoteList()
    var noteController = new Controller(noteList, note);
    noteController.showNoteListView(documentDouble)
    console.log(documentDouble.getElementById("app").innerHTML);
    pass = documentDouble.getElementById("app").innerHTML === "<ul><li><div><a href='#notes/0'>Favourite drink: sel</a></div></li></ul>";
    assert.isTrue(pass);
    formatOutput('testNoteController', pass)
    // noteController.showNoteListView();                             <ul><li><div>Favourite drink: seltzer.</div></li></ul
    // console.log(noteController.printElement());
    // assert.isTrue( noteController.printElement() === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
  };
  testNoteController();
})(this);
