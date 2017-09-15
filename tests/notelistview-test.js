(function(exports) {
  function testNoteListViewObject() {
    var noteList = { list:  [{text: "Favourite food: pesto", id: 0}, {text: "Favourite drink: seltzer", id: 1}]};
    var noteListView = new NoteListView(noteList);
  pass = noteListView.view() === "<ul><li><div><a href='#notes/0'>Favourite food: pest</a></div></li><li><div><a href='#notes/1'>Favourite drink: sel</a></div></li></ul>";
  // console.log(noteListView.view());
  assert.isTrue(pass);
  formatOutput('testNoteListViewObject', pass)
  // documentDouble.getElementById("app").click();
  // pass = documentDouble.URL === "http://localhost:8080#notes/0";
  // assert.isTrue(pass);
  // formatOutput('testNoteListViewObject', pass);
  };
  testNoteListViewObject();
})(this);
