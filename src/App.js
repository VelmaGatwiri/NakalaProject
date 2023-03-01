import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import BiodataList from './components/BiodataList';
import Form from './components/Form';

function App() {

  const [userbiodata, setbiodata] = useState([])
  const [editbiodata, seteditBiodata] = useState(null)


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


const editBtn = (biodata) => {
  seteditBiodata(biodata)
}

const updatedInformation = (biodata) => {
  const new_biodata = userbiodata.map(mybiodata => {
    if (mybiodata.id === biodata.id){
      return biodata
    }
  })

  setbiodata(new_biodata)

}

const biodataForm = () => {
  seteditBiodata({first_name:'', last_name:'', email_address:'',
                      gender:'', physical_address:'', phone_number:''})
}

const insertedInformation = (biodata) => {
  const new_user = [...userbiodata, biodata]
  setbiodata(new_user)

}

const deleteBtn = (biodata) => {
  const new_user = userbiodata.filter(mybiodata =>{
    if(mybiodata.id === biodata.id){
      return false
    }
    return true
  })
  setbiodata(new_user)
}


  return (

    <div className="App">

        <div className="row">

          <div className="col">

            <h3>Nakala Project Exercise</h3>
            <br/>
          
          </div>
          <div className="col">

            <button onClick = {biodataForm} className="btn btn-primary">Add New User</button>

          </div>
        </div>
        

        <BiodataList userbiodata = {userbiodata} editBtn = {editBtn} deleteBtn = {deleteBtn}/>

        {editbiodata ? <Form biodata = {editbiodata} updatedInformation = {updatedInformation} insertedInformation = {insertedInformation}/> : null}
        
    </div>
  );
}

export default App;  

