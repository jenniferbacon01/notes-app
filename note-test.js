
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
    assert.isTrue(noteListView.view() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>");
  };
  testNoteListViewObject();
})(this);
