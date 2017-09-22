(function(exports) {
  function testNoteControllerInitialLoad() {
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
    var documentDouble = new DocumentDouble();
    var noteList = { list: []}
    var noteController = new Controller(noteList);
    noteController.showNoteListView(documentDouble);
    pass = documentDouble.getElementById("app").innerHTML === "<ul></ul>";
    assert.isTrue(pass);
    formatOutput('testNoteControllerInitialLoad', pass)
  };
  testNoteControllerInitialLoad();

  function testAddNoteEventListenerGetsAdded(){
    var eventListenerAdded = false;
    function WindowDouble(doc) {
      this.doc = doc;
    };
    var fnvariable;
    WindowDouble.prototype.addEventListener = function (eventName, fn) {
      this.eventName = eventName;
      fnvariable = fn;
      this.fn = fnvariable;
    }
    var windowDouble = new WindowDouble();
    var noteList = {};
    var noteController = new Controller(noteList);
    noteController.addNote(windowDouble);
    pass = (windowDouble.eventName === "submit" && windowDouble.fn === fnvariable);
    assert.isTrue(pass);
    formatOutput('testAddNoteEventListenerGetsAdded', pass);
  };
  testAddNoteEventListenerGetsAdded();


  function testAddNoteEventListenerAddsNoteOnSubmit(){
    var eventDouble = { target: { "0": {value: "This is a new note"}}};
    function WindowDouble(doc) {

    };

    WindowDouble.prototype.addEventListener = function(eventName, fn) {
      this.eventName = eventName;
      this.fn = fn;
    };

    WindowDouble.prototype.triggerSubmit = function() {
      this.fn();
    };

    var addHasBeenCalled = false;
    var noteList = { list: [], add: function(note){
      addHasBeenCalled = true;
    }}
    var noteController = new Controller(noteList);
    var windowDouble = new WindowDouble();
    function DocumentDouble(win) {
      this.tags = {};
      this.window = win;
    }
    function Tag(){
      this.innerHTML = "";
      this.value = "";
    }
    // Submit needs to trigger window submit event
    Tag.prototype.submit = function() { }
    DocumentDouble.prototype.getElementById = function (id) {
      if (!(id in this.tags)) {
        this.tags[id] = new Tag();
      };
      return this.tags[id];
    };
    var documentDouble = new DocumentDouble(windowDouble);

    noteController.addNote(windowDouble);
    windowDouble.triggerSubmit();
    pass = addHasBeenCalled === true;
    assert.isTrue(pass);
    formatOutput('testAddNoteEventListenerAddsNoteOnSubmit', pass);
  };
  testAddNoteEventListenerAddsNoteOnSubmit();

  // function testAddNote(){
  //   function DocumentDouble() {
  //     this.tags = {};
  //   }
  //   function Tag(){
  //     this.innerHTML = "";
  //     this.value = "";
  //   }
  //   // Submit needs to trigger window submit event
  //   Tag.prototype.submit = function() { }
  //   DocumentDouble.prototype.getElementById = function (id) {
  //     if (!(id in this.tags)) {
  //       this.tags[id] = new Tag();
  //     };
  //     return this.tags[id];
  //   };
  //   function WindowDouble(doc) {
  //     this.doc = doc;
  //   };
  //   WindowDouble.prototype.addEventListener = function (event, action) {
  //     this.doc.getElementById('text').onclick  = function () {}
  //   }
  //   var documentDouble = new DocumentDouble();
  //   var addHasBeenCalled = false;
  //   var noteList = { list: [], add: function(note){
  //     addHasBeenCalled = true;
  //   }}
  //   var windowDouble = new WindowDouble(documentDouble);
  //   var noteController = new Controller(noteList);
  //   noteController.addNote(windowDouble);
  //   documentDouble.getElementById('textinput').value = "Favourite drink: seltzer";
  //   documentDouble.getElementById('text').submit();
  //   pass = addHasBeenCalled === true;
  //   assert.isTrue(pass);
  //   formatOutput('testAddNote', pass)
  // };
  // testAddNote();


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
