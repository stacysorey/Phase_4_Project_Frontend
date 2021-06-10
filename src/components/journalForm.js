//events and forms
class JournalForm {

  constructor(){
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
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
        console.log("delete event")
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

}