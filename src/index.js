const cozyJournalAdapter = new CozyJournalAdapter("http://localhost:3000")

document.addEventListener("DOMContentLoaded", () => {
  cozyJournalAdapter.getJournals();
})


