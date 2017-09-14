
(function(exports) {

  var n  = 0;
  function testNoteObjectId() {

    var note = new Note("message");
    var note2 = new Note("whatever");
    pass = note.id === 0;
    assert.isTrue(pass);
    formatOutput('testNoteObjectId', pass)
    pass = note2.id === 1;
    assert.isTrue(pass);
    formatOutput('testNoteObjectId', pass)
  };
  testNoteObjectId();

  function testNoteObject() {
    var note = new Note("message");
    pass = note.readText() === "message"
    assert.isTrue(pass);
    formatOutput('testNoteObject', pass)
  };
  testNoteObject();

})(this);
