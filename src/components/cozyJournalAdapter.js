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
      journals.forEach(journal => {    
        const j = new Journal(journal) 
        j.addToDom()      
      })
    })
    .catch(err => console.warn(err))
  }

  createJournal(titleInput){
    fetch(this.baseJournalURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: titleInput.value
      })
    })
    .then(r => r.json())
    .then(data => {
      if (data.status === 201){
        const j = new Journal(data.journal)
        j.addToDom()
      } else {
        alert(data.errors)
      }
      titleInput.value = ""
    })
    .catch(err => console.warn(err))
  }

  deleteJournal(li){
    fetch(`${this.baseJournalURL}/${li.dataset.id}`,{
      method: "DELETE"
    })
    .then(r => {
      console.log(r)
      return r.json()
    })
    .then(data => {
      if (data.message === "Successfully deleted"){
        // delete li for DOM
        li.remove()
      } else {
        alert(data.message)
      }
    })
    .catch(err => console.warn(err))
  }

}