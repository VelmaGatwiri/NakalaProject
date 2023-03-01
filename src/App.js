import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [userbiodata, setbiodata] = useState([])

useEffect(() => {


  fetch(' http://127.0.0.1:8000/userBackend/biodata/', {
    'method': 'GET',
    headers: {
      'Content-Type':'application/json',
      'Authorization':'Token 6f2f0bfed775c7b292096a108b1acd25bcc3cb13'
    }
    
  })
  .then(resp => resp.json())
  .then(resp => setbiodata(resp))
  .catch(error => console.log(error))

},[])

  return (
    <div className="App">
        <h3>Nakala Project Exercise</h3>

        {userbiodata.map(biodata => {
          return <h2>{biodata}</h2>
        })}
    </div>

  );
}

export default App;
