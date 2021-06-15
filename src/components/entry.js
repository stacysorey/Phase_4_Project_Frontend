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
      `<li data-id=${this.id}>
      ${this.date}
      ${this.title}<br>
      ${this.description}
      <a data-action='edit'>&#9997;</a>
      <a data-action='delete'>&#10062;</a>
      </li>`
    )
  }
}