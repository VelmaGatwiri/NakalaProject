import React, {useState} from "react";
import APIService from "../APIService";
//import {Select, MenuItem} from "@material-ui/core"

function Form(props){
    const [first_name,setFirstname] = useState(props.biodata.first_name)
    const [last_name,setLastname] = useState(props.biodata.last_name)
    const [email_address,setEmailaddress] = useState(props.biodata.email_address)
    const [gender,setGender] = useState(props.biodata.gender)
    const [physical_address,setPhysicaladdress] = useState(props.biodata.physical_address)
    const [phone_number,setPhonenumber] = useState(props.biodata.phone_number)

    const updateBiodata = () => {
        APIService.UpdateBiodata(props.biodata.id,{first_name, last_name, email_address, gender, physical_address, phone_number})
        .then(resp => props.updatedInformation(resp))
    }

    const insertBiodata = () => {
        APIService.InsertBiodata({first_name, last_name, email_address, gender, physical_address, phone_number})
        .then(resp => console.log(resp))
    }

    return(
        <div>

          {props.biodata ? (

            <div className="mb-3">
                <label htmlFor="first_name" className="form-label">First Name</label>
                <input type ="text" className="form-control" id="first_name" 
                    value = {first_name} onChange = {e =>setFirstname(e.target.value)}
                    placeholder="Please enter first name"></input>

                <label htmlFor="last_name" className="form-label">Last Name</label>
                <input type ="text" className="form-control" id="last_name" 
                    value = {last_name} onChange = {e =>setLastname(e.target.value)}
                    placeholder="Please enter Last name"></input>

                <label htmlFor="email_address" className="form-label">Email Address</label>
                <input type ="text" className="form-control" id="email_address" 
                    value = {email_address} onChange = {e =>setEmailaddress(e.target.value)}
                    placeholder="Please enter Email address"></input>

                <label htmlFor="gender" className="form-label">Gender</label>
                <br/>
                <select id="gender"  value = {gender} onChange = {e =>setGender(e.target.value)}>
                    <option value="male">M</option>
                    <option value="female">F</option>
                    <option value="undefined">Not Say</option>
                </select>
                <br/>

                <label htmlFor="physical_address" className="form-label">Physical Address</label>
                <input type ="text" className="form-control" id="physical_address" 
                    value = {physical_address} onChange = {e =>setPhysicaladdress(e.target.value)}
                    placeholder="Please enter Physical Address"></input>

                <label htmlFor="phone_number" className="form-label">Phone Number</label>
                <input type ="text" className="form-control" id="phone_number" 
                    value = {phone_number} onChange = {e =>setPhonenumber(e.target.value)}
                    placeholder="Please enter Phone Number"></input>
                <br/>

                {
                    props.biodata.id ? <button onClick = {updateBiodata} className="btn btn-success">Update</button>
                    : <button onClick = {insertBiodata} className="btn btn-success">Add new User</button>


                }

            </div>


          ): null}
        </div>
    )
}
export default Form;