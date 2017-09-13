
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    };
  }
};



(function(exports) {
  function testNoteObject() {
    var note = new Note("message");
    assert.isTrue(note.readText() === "message");
    // if (note.text !== "message") {
    //   throw new Error("Message not stored in text property");
    // }
  };
  testNoteObject();
})(this);


(function(exports) {
  function testNoteListObject() {
    var noteList = new NoteList();
    var note1 = { text: "Favourite drink: seltzer"}
    noteList.add(note1);
    assert.isTrue(noteList.list[0].text === "Favourite drink: seltzer");
    assert.isTrue(noteList.readList()[0].text === "Favourite drink: seltzer");

  };
  testNoteListObject();
})(this);


(function(exports) {
  function testNoteListViewObject() {
    var noteList = { list:  [{text: "Favourite food: pesto"}, {text: "Favourite drink: seltzer"}]};
    var noteListView = new NoteListView(noteList);
  pass = noteListView.view() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>";
  assert.isTrue(pass);
  formatOutput('testNoteListViewObject', pass)
  };
  testNoteListViewObject();
})(this);

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
    var noteList = new NoteList()
    var noteController = new Controller(noteList);


    noteController.showNoteListView(documentDouble)

    // console.log(noteController.showNoteListView())

    assert.isTrue(documentDouble.getElementById("app").innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
    // noteController.showNoteListView();                             <ul><li><div>Favourite drink: seltzer.</div></li></ul
    // console.log(noteController.printElement());
    // assert.isTrue( noteController.printElement() === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
  };
  testNoteController();
})(this);
