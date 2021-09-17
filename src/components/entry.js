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
      <a data-action='delete_entry'>&#10062;</a>
      </li>`
      // <a data-action='edit_entry'>&#9997;</a>
    )
  }
}