fetch("http://localhost:3000/api/v1/journals")
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(err => console.warn(err))