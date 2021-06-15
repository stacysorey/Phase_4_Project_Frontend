let editMode = false
let createdEntries = false
const cozyJournalAdapter = new CozyJournalAdapter("http://localhost:3000")
const journalForm = new JournalForm

document.addEventListener("DOMContentLoaded", () => {
  journalForm.addCreateForm();
  cozyJournalAdapter.getJournals();
  journalForm.listenEvents();
  toggle();
})

function toggle() {
  const toggbtn = document.getElementById("toggle-mode")
  const el = document.getElementById("style1");

  toggbtn.addEventListener("click", () => {
    if (el.href.match("assets/stylesheets/application-light.css")) {
      el.href = "assets/stylesheets/application-dark.css";
    } else {
        el.href = "assets/stylesheets/application-light.css";
    }
  })
  
}

