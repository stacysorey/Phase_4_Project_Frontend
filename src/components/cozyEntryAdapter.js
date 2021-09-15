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
        // const j = new Journal(journal) 
        // j.addToDom()    EXAMPLE
  } )
  }
//access to journal id via data
//adapt to find id of journal
}