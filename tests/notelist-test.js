(function(exports) {
  function testNoteListObject() {
    var noteList = new NoteList();
    var note1 = { text: "Favourite drink: seltzer"}
    noteList.add(note1);
    assert.isTrue(noteList.list[0].text === "Favourite drink: seltzer");
    pass = noteList.readList()[0].text === "Favourite drink: seltzer"
    assert.isTrue(pass);
    formatOutput('testNoteListObject', pass)

  };
  testNoteListObject();
})(this);
