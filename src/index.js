let editMode = false
let createdEntries = false
const cozyJournalAdapter = new CozyJournalAdapter("http://localhost:3000")
const journalForm = new JournalForm
const entryForm = new EntryForm

document.addEventListener("DOMContentLoaded", () => {
  journalForm.addCreateForm();
  cozyJournalAdapter.getJournals();
  journalForm.listenEvents();
  toggle();
})

function toggle() {
  const toggbtn = document.getElementById("toggle-mode")
  const logo = document.getElementById("logo-container")
  const lightMode = document.getElementById("style1");

  toggbtn.addEventListener("click", () => {
    if (lightMode.href.match("assets/stylesheets/application-light.css")) {
      lightMode.href = "assets/stylesheets/application-dark.css";
      
    } else {
      lightMode.href = "assets/stylesheets/application-light.css";
    
    }
  })
  
}

