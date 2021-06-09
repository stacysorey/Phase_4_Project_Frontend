//creates journal class

class Journal {
  static all = []
  

  constructor({id, title, entries}){
    this.id = id
    this.title = title
    this.entries = entries.map(entry => new Entry(entry))

    Journal.all.push(this)
  }
}

