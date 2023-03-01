import React from "react";
import APIService from "../APIService";

function BiodataList(props){

    const editBtn = (biodata) => {
        props.editBtn(biodata)
    }

    const deleteBtn = (biodata) => {
        APIService.DeleteBiodata(biodata.id)
        .then(() => props.deleteBtn(biodata))
        .catch(error => console.log(error))
    }


    return (
        <div>

        {props.userbiodata && props.userbiodata.map(biodata => {
          return ( 
          <div>
            <h4>User ID: {biodata.id}</h4>
            <p>First Name: {biodata.first_name}</p>
            <p>Last Name: {biodata.last_name}</p>
            <p>Email Address: {biodata.email_address}</p>
            <p>Gender: {biodata.gender}</p>
            <p>Physical Address: {biodata.physical_address}</p>
            <p>Phone Number: {biodata.phone_number}</p>
            
            <div className="row">
               <div className="col-md-1">
                    <button className="btn btn-primary" onClick={() => editBtn(biodata)}>Update</button>
                </div> 
                <div className="col">
                    <button className="btn btn-danger" onClick={() => deleteBtn(biodata)}>Delete</button>
                </div> 
            </div>
            
        </div>

                )       
            })}
        
        </div>
    )
}
export default BiodataList