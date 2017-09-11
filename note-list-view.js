(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
    this.stringpart = "";
    this.string = "<ul>" + this.stringpart + "</ul>";
  };
  NoteListView.prototype.view = function() {
    this.noteList.list.forEach(function(note){ this.stringpart += ("<li><div>" + note.text + "</div></li>")});
    console.log(this.string);
    return this.string;
  };

  exports.NoteListView = NoteListView;
})(this);


// "<ul>
// <li><div>
// Favourite food: pesto
// </div></li>

// <li><div>
// Favourite drink: seltzer
// </div></li>

// </ul>"
