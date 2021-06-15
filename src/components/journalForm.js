//events and forms
class JournalForm {

  constructor(){
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
  }

  addCreateForm(){
    const formContainer = document.getElementById("form-container");
    const form = document.createElement('form');
    form.innerHTML = `<input id="title-input" placeholder='title' type='text'/>
    <input id="title-submit" value='Create Journal' type='submit'/>`
    formContainer.append(form);
    form.addEventListener("submit", this.handleSubmit);
  }

  handleSubmit(event){
    event.preventDefault();
    const titleInput = event.target[0]
    cozyJournalAdapter.createJournal(titleInput);
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
        console.log("edit event")
        break;

      case "show":
        console.log("show event")
        break;

      default:
        break;
    }
  }


  //hide new entry emoji when not in a journal
  //add listenEvents for hover over menu items
}