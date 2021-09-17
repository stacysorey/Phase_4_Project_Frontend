//handles all fetch requests

class CozyJournalAdapter {
  
  constructor(baseURL) {
    this.baseURL = `${baseURL}/api/v1/journals`;
  }

  getJournals(){
    
    fetch(this.baseURL)
    .then(r => r.json())
    .then(journals => {
      journals.forEach(journal => {    
        const j = new Journal(journal) 
        j.addToDom()      
      })
    })
    .catch(err => console.warn(err))
  }
  
  editJournal(editMode, titleInput){
    fetch(`${this.baseURL}/${editMode.dataset.id}`, {
      method: "PATCH", 
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
      if (data.status === 204){
        editMode.children[0].innerText = data.journal.title
        editMode = false
        document.getElementById('title-submit').value = "Create Journal"
        titleInput.value = ""
      } else {
        alert(data.errors)
      }
    })
    .catch(err => console.warn(err))
  }
  
  createJournal(titleInput){
    fetch(this.baseURL, {
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
    // "undefined" ActiveRecord::InvalidForeignKey (SQLite3::ConstraintException: FOREIGN KEY constraint failed):app/controllers/api/v1/journals_controller.rb:61:in `destroy' 
    fetch(`${this.baseURL}/${li.dataset.id}`,{
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