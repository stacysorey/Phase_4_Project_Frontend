//handles all fetch requests

// function fetchJournals(){
//   const journalsContainer = document.getElementById("journals-container")

//   fetch("http://localhost:3000/api/v1/journals")
//   .then(r => r.json())
//   .then(data => {
//       data.forEach(function(journal){
//           journalsContainer.innerHTML += `<li>${journal.title}</li>`
//       })
//   })
//   .catch(err => console.warn(err))
// }

class CozyJournalAdapter {

  constructor(baseURL) {
    this.baseJournalURL = `${baseURL}/api/v1/journals`
  }

  getJournals(){
    fetch(this.baseJournalURL)
    .then(r => r.json())
    .then(journals => {
      journals.forEach(journal => {           journalsContainer.innerHTML += `<li>${journal.title}</li>`
      })
    })
    .catch(err => console.warn(err))
  }

}