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
      //add listen event for hover over buttons
      
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
}