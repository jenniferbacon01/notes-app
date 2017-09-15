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
    // var noteList = new NoteList()
    var noteList = { list: [note]}
    var noteController = new Controller(noteList);
    noteController.showNoteListView(documentDouble);
    pass = documentDouble.getElementById("app").innerHTML === "<ul><li><div><a href='#notes/0'>Favourite drink: sel</a></div></li></ul>";
    assert.isTrue(pass);
    formatOutput('testNoteController', pass)
  };
  testNoteController();


  function testChangetoSingleNoteView() {
      function DocumentDouble() {
        this.tags = {};
        this.location = { hash: "#notes/0"};
      };
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
    // var noteList = new NoteList();
    var noteList = { list: [note]}
    var noteController = new Controller(noteList);
    noteController.showSingleNoteView(documentDouble);
    pass = documentDouble.getElementById('app').innerHTML === "<div>Favourite drink: seltzer</div>";
    assert.isTrue(pass);
    formatOutput('testNoteController', pass)
  };

  testChangetoSingleNoteView();
})(this);
