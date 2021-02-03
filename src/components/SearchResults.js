import React from "react";

function SearchResults(props) {
    if(!props.results){
        return (
            <tbody className="employees">
                <tr className="employee">
                    <td colSpan="10"><p className="error">No Results Found:</p></td>                                
                </tr>        
            </tbody>      
        );
    }
    
    
    return (
        <tbody className="employees">            
            {props.results.map( (employee) => {
                return (
                    <tr key={employee.email} className="employee">            
                        <td><img alt="profile-pic" src={employee.picture.thumbnail} className="img-fluid" /></td>
                        <td><p className="firstName">{employee.name.first}</p></td>
                        <td><p className="lastName">{employee.name.last}</p></td>            
                        <td><p className="gender">{employee.gender}</p></td>            
                        <td><p className="age">{employee.dob.age}</p></td>            
                        <td><p className="email">{employee.email}</p></td>            
                        <td><p className="address">{employee.location.street.number} {employee.location.street.name}</p></td>            
                        <td><p className="city">{employee.location.city}</p></td>            
                        <td><p className="state">{employee.location.state}</p></td>            
                        <td><p className="postcode">{employee.location.postcode}</p></td>            
                    </tr>
                );
            })}        
        </tbody>
    );
}

export default SearchResults;
