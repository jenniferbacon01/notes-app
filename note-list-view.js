(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
    this.stringpart = "";
    // this.string = "";
  };
  NoteListView.prototype.view = function() {
    var stringpart = "";
    this.noteList.list.forEach(function(note){
      // var stringpart = "";
      stringpart+=("<li><div>" + note.text + "</div></li>");
    console.log("inside forEach: " + stringpart)
  });
    console.log("outside forEach: " + stringpart);
    return ("<ul>" + stringpart + "</ul>");
  };
  exports.NoteListView = NoteListView;
})(this);
//
// note1 = new Note("hi");
// note2 = new Note("ok");
notelist = new NoteList();
// notelist.add(note1);
// notelist.add(note2);
notelistview = new NoteListView(notelist);
notelistview.view()

// "<ul>
// <li><div>
// Favourite food: pesto
// </div></li>

// <li><div>
// Favourite drink: seltzer
// </div></li>

// </ul>"
