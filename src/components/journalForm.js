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

}