class CozyEntryAdapter {

  constructor(baseURL) {
    this.baseURL = `${baseURL}/api/v1/journals`;
  }


  getEntries(){

    fetch(this.baseURL + "entries", {
      method: "GET",
        headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
        }
    })
    .then(r => r.json())
    .catch(err => console.warn(err))
  }


}