import React, { Component } from "react";
import API  from "../utils/API.js";
import "./Directory.css";
import SearchResults from "./SearchResults.js";

class Directory extends Component {
    state = {
        filter: "",
        sort: {
            field: "",
            asc: 1
        },
        limit: 22,
        allResults: [],
        displayResults: [],
        error: ""
    };

    componentDidMount() {
        API.getUsers(this.state.limit)
            .then( (response)=> {
                this.setState({ allResults: response.data.results});
                this.setState({ displayResults: response.data.results});
            })
            .catch( (err) => {
                console.log(`Error Occured Getting Users:${err}`);
                this.setState({ error: err});
            });
    }

    handleFilter = (event) => {     
        const filterValue = event.target.value;
        this.setState({filter: filterValue});
        console.log(filterValue.length);
        if(filterValue.length > 0){
            this.setState({displayResults: this.state.allResults.filter((employee) => {
                // concatenate relevant fields then do a full check on all fields
                const empFields = `${employee.name.first} ${employee.name.last} ${employee.gender} ${employee.dob.age} ${employee.email} ${employee.location.street.number} ${employee.location.street.name} ${employee.location.city} ${employee.location.state} ${employee.location.postcode}`;
                return (empFields.includes(this.state.filter) > 0);
            })});
        }else{
            this.setState({displayResults: this.state.allResults});
        }
    }

    handleSortChange = (event) => {
        // Set field to sort on and asc desc sort order
        const sortField = event.target.id;
        if(this.state.sort.field === sortField){
            this.setState({
                sort: { field: sortField, asc: (this.state.sort.asc*-1)}
            });
        }else{
            this.setState({
                sort: { field: sortField, asc: 1}
            });
        }
        
        // Sort based on column clicked
        switch(event.target.id){
            case "firstName":
                this.setState(this.state.displayResults.sort((a,b)=>{ 
                    if(a.name.first > b.name.first) return this.state.sort.asc;
                    if(a.name.first < b.name.first) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "lastName":
                this.setState(this.state.displayResults.sort((a,b)=>{ 
                    if(a.name.last > b.name.last) return this.state.sort.asc;
                    if(a.name.last < b.name.last) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "gender":
                this.setState(this.state.displayResults.sort((a,b)=>{ 
                    if(a.gender > b.gender) return this.state.sort.asc;
                    if(a.gender < b.gender) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "age":
                this.setState(this.state.displayResults.sort((a,b)=>{ 
                    if(a.dob.age > b.dob.age) return this.state.sort.asc;
                    if(a.dob.age < b.dob.age) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "email":
                this.setState(this.state.displayResults.sort((a,b)=>{ 
                    if(a.email > b.email) return this.state.sort.asc;
                    if(a.email < b.email) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "address":
                this.setState(this.state.displayResults.sort((a,b)=>{ 
                    if(a.location.street.number > b.location.street.number) return this.state.sort.asc;
                    if(a.location.street.number < b.location.street.number) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "city":
                this.setState(this.state.displayResults.sort((a,b)=>{ 
                    if(a.location.city > b.location.city) return this.state.sort.asc;
                    if(a.location.city < b.location.city) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "state":
                this.setState(this.state.displayResults.sort((a,b)=>{ 
                    if(a.location.state > b.location.state) return this.state.sort.asc;
                    if(a.location.state < b.location.state) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "postalCode":
                this.setState(this.state.displayResults.sort((a,b)=>{ 
                    if(a.location.postcode > b.location.postcode) return this.state.sort.asc;
                    if(a.location.postcode < b.location.postcode) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            default:
                console.log(`Invalid sort passed in: ${event.target.id}`);
                break;
        }
    }

    render() {
        return ( 
            <div className="Directory">
                <table className="table-striped border mx-auto">                
                    <thead className="border-bottom">
                        <tr>
                            <td colSpan="3" className="mr-0">Filter Employees:</td>
                            <td colSpan="5" className="ml-0">
                                <input type="text" className="form-control" name="filter" id="filter" placeholder="filter" value={this.state.filter} onChange={this.handleFilter}/>
                            </td>
                        </tr>
                        <tr>
                            <th></th> 
                            <th className="Directory" onClick={this.handleSortChange} id="firstName">First Name</th>
                            <th onClick={this.handleSortChange} id="lastName">Last Name</th>
                            <th onClick={this.handleSortChange} id="gender">Gender</th>
                            <th onClick={this.handleSortChange} id="age">Age</th>
                            <th onClick={this.handleSortChange} id="email">Email</th>
                            <th onClick={this.handleSortChange} id="address">Address</th>
                            <th onClick={this.handleSortChange} id="city">City</th>
                            <th onClick={this.handleSortChange} id="state">State</th>
                            <th onClick={this.handleSortChange} id="postalCode">Postal Code</th>          
                        </tr>
                    </thead>
                    <SearchResults results={this.state.displayResults} />                        
                </table>
            </div>           
        );
    }
}

export default Directory;
