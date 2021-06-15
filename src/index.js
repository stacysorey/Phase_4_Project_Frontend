const cozyJournalAdapter = new CozyJournalAdapter("http://localhost:3000")
const journalForm = new JournalForm

document.addEventListener("DOMContentLoaded", () => {
  journalForm.addCreateForm();
  cozyJournalAdapter.getJournals();
  journalForm.listenEvents();
})


