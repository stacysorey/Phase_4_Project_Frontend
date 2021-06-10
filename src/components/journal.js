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
      `<li id="journal-${this.id}" journal-id=${this.id}>
      <span>${this.title}</span>
      </li>`
      
    )
  }

  addToDom() {
    const journalsContainer = document.getElementById("journals-container");
    journalsContainer.innerHTML += this.render()
  }

  renderEntries() {
    const li = document.getElementById(`journal-${this.id}`)
    const ul = document.createElement('ul')

    this.entries.forEach(entry => ul.innerHTML += entry.render())
    li.append(ul)
    createdEntries = ul
  }
}