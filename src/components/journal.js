//creates journal class

class Journal {
  static all = []
  

  constructor({id, title, entries}){
    this.id = id
    this.title = title
    this.entries = entries.map(entry => new Entry(entry))

    Journal.all.push(this)
  }


  render() {
    return (
      `<li id="data-${this.id}" data-id=${this.id}>
      <span>${this.title}</span>
      <button data-action='show'>Show Entries</button>
      <button data-action='edit'>Edit Journal Title</button>
      <button data-action='delete'>Delete Journal</button>
      </li>`
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