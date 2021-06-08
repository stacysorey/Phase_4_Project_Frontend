document.addEventListener("DOMContentLoaded", () => {
  fetchJournals();
})


function fetchJournals(){
  const journalsContainer = document.getElementById("journals-container")

  fetch("http://localhost:3000/api/v1/journals")
  .then(r => r.json())
  .then(data => {
      data.forEach(function(journal){
          journalsContainer.innerHTML += `<li>${journal.title}</li>`
      })
  })
  .catch(err => console.warn(err))
}