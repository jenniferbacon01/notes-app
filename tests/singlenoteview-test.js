(function(exports) {
  function testSingleNoteView() {
  note = {text: 'Favourite drink: seltzer'};
  var singleNoteView = new SingleNoteView(note);
  pass = singleNoteView.createHtmlELement() === '<div>Favourite drink: seltzer</div>';
  assert.isTrue(pass);
  formatOutput('testSingleNoteView', pass)
  };
  testSingleNoteView();
})(this);
