  // Prayers time
document.addEventListener("scroll",PageColor);  
function PageColor(){
    var currentScroll = window.scrollY;
    if(currentScroll > 180){
        document.body.style.backgroundColor = 'Yellow';
    }
    else{
        document.body.style.backgroundColor = 'white';
    }
}
async function Salah_timing(){
    const city = "&city="+ document.getElementById("city").value;
    const country= "&country="+ document.getElementById("country").value;
    var school="&school=1";
    if(document.getElementById("flexSwitchCheckDefault").checked){
        school="&school=0";
    }
    let api_url='https://api.aladhan.com/v1/timingsByCity/:date_or_timestamp?'+city+country+school;
    const response = await fetch(api_url);
    const Time = await response.json();
    const { Fajr, Dhuhr, Sunrise, Asr, Maghrib, Isha } = Time.data.timings;
    console.log(Time);
    document.getElementById('fajr').innerHTML =  Fajr;
    document.getElementById('sunrise').innerHTML = Sunrise;
    document.getElementById('dhuhr').innerHTML = Dhuhr;
    document.getElementById('asr').innerHTML = Asr;
    document.getElementById('maghreb').innerHTML = Maghrib;
    document.getElementById('isha').innerHTML = Isha;
} 
Salah_timing(); 
/*sticky notes*/
const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Sticky Note";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}

