//creates journal class

class Journal {
  static all = []
  

  constructor({id, title, entries}){
    this.id = id
    this.title = title
    this.entries = entries.map(entry => new Entry(entry))
    //error on .map

    Journal.all.push(this)
  }


  render() {
    return (
      `<li id="data-${this.id}" data-id=${this.id}>
      <span>${this.title}</span>
      <a data-action='edit'>&#9997;</a>
      <a data-action='new'>&#10133;</a>
      <a data-action='delete'>&#10062;</a>
      <a data-action='show'>&#128317;</a>
      <a data-action='hide'>&#128316;</a>
      </li>`
      //add listen event for hover over buttons to show what it is
      
    )
  }

  addToDom() {
    const journalsContainer = document.getElementById("journals-container");
    journalsContainer.innerHTML += this.render()
  }

  renderEntries() {
    const li = document.getElementById(`data-${this.id}`)
    const ul = document.createElement('ul')

    this.entries.forEach(entry => ul.innerHTML += entry.render())
    li.append(ul)
    createdEntries = ul
  }
  
  renderNewForm(){
    const li = document.getElementById(`data-${this.id}`)
    const entryForm = document.createElement('form');
        entryForm.innerHTML = 
        `<input id="entry-title-input" placeholder='title' type='text'/>
        <input id="description-input" placeholder='description' type='text'/>
        <input id="date-input" placeholder='date' type='date'/>
        <input id="title-submit" value='Create Entry' type='submit'/>`
        li.append(entryForm);
        console.log(this)
        entryForm.addEventListener('submit', this.handleNewEntry.bind(this))
  }

  handleNewEntry(event) {
    event.preventDefault();
    const title = event.target[0].value
    const description = event.target[1].value
    const date = event.target[2].value
    const journalID = this.id
    const entryAttr= {title: title, description: description, date: date, journal_id: journalID}
    cozyEntryAdapter.getEntries(entryAttr)
    //delete form
  }
}

//delete form out of the DOM