//events and forms
class JournalForm {

  constructor(){
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
  }

  addCreateForm(){
    const formContainer = document.getElementById("f-container");
    const form = document.createElement('form');
    form.innerHTML = 
      `<a style="font-size:35px">&#128211;</a>  
      <input id="title-input" placeholder='  create new journal' type='text' style="font-size:30px; border-radius:50px"/>
      <input id="title-submit" value='&#10133' type='submit' style="font-size:20px; border-radius:25px"/>`
    formContainer.append(form);
    form.addEventListener("submit", this.handleSubmit);
  }

  handleSubmit(event){
    event.preventDefault();
    const titleInput = event.target[0]
    if (editMode){
      cozyJournalAdapter.editJournal(editMode, titleInput);
    } else {
    cozyJournalAdapter.createJournal(titleInput);
    }
  }


  listenEvents(){
    const journalsContainer = document.getElementById("journals-container");
    journalsContainer.addEventListener("click", this.handleEvents);
  }

  handleEvents(event){
    const li = event.target.parentElement;
    const action = event.target.dataset.action;
    switch (action) {
      
      case "delete":
        cozyJournalAdapter.deleteJournal(li)
        break;

      case "edit":
        editMode = li;
        document.getElementById('title-submit').value = "Update"
        document.getElementById('title-input').value = li.children[0].innerText
        break;

      case "new":
        console.log("new entry!");
        
        break;

      case "show":
        if (createdEntries) createdEntries.remove();
        const j = Journal.all.find(j => j.id == li.dataset.id)
        j.renderEntries();
        break;

      case "hide":
        if (createdEntries) createdEntries.remove();
        //exits out if clicked on other entries
        break;

      default:
        break;
    }
  }

  
  


  //hide new entry emoji when not in a journal
  //add listenEvents for hover over menu items
}