
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
