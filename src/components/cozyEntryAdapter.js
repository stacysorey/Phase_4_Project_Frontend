class CozyEntryAdapter {

  constructor(baseURL) {
    this.baseURL = `${baseURL}api/v1/entries`;
  }

  getEntries(entryAttr){

    fetch(this.baseURL, {
      method: "POST",
        headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
        },
        body: JSON.stringify({
          entry: entryAttr
        })
      })
      .then(r => r.json())
      .then(data => {
        console.log(data);
        // let entry = new Entry(data.id, data.title, data.description, data.date);
        // entry.addToDom(); //not a function
        // const j = new Journal(journal) 
        // j.addToDom()    EXAMPLE
  } )
  }
  
}

// data.forEach(e => {
//   let entry = new Entry(e.id, e.title, e.description, e.date);
//   entry.addToDom();
// })
//access to journal id via data
//adapt to find id of journal