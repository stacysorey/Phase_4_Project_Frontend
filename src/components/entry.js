//creates entry class
class Entry {
  static all = []

  constructor({id, title, description, date, journal_id}){
    this.id = id
    this.title = title
    this.description = description
    this.date = date
    this.journal_id = journal_id

    Entry.all.push(this)
  }

  render() {
    return (
      `<li entry-id=${this.id}><span>${this.title}</span><span>${this.date}</li>`
      `<li entry-description=${this.description}</li>`
    )
  }
}