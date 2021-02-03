import React, { Component } from "react";
import API from "../utils/API.js";
import SearchResults from "./SearchResults.js";

class Directory extends Component {
    state = {
        filter: [{
            attribute: "",
            match: ""
        }],
        sort: {
            field: "",
            asc: 1
        },
        limit: 50,
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getUsers(this.state.limit)
            .then( (response)=> {
                console.log(`Response:${JSON.stringify(response)}`);
                this.setState({ results: response.data.results});
            })
            .catch( (err) => {
                console.log(`Error Occured Getting Users:${err}`);
                this.setState({ error: err});
            });
    }

    // TODO: Update to do filtering
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);        
    }

    // TODO: Update results sorting
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
                this.setState(this.state.results.sort((a,b)=>{ 
                    if(a.name.first > b.name.first) return this.state.sort.asc;
                    if(a.name.first < b.name.first) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "lastName":
                this.setState(this.state.results.sort((a,b)=>{ 
                    if(a.name.last > b.name.last) return this.state.sort.asc;
                    if(a.name.last < b.name.last) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "gender":
                this.setState(this.state.results.sort((a,b)=>{ 
                    if(a.gender > b.gender) return this.state.sort.asc;
                    if(a.gender < b.gender) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "age":
                this.setState(this.state.results.sort((a,b)=>{ 
                    if(a.dob.age > b.dob.age) return this.state.sort.asc;
                    if(a.dob.age < b.dob.age) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "email":
                this.setState(this.state.results.sort((a,b)=>{ 
                    if(a.email > b.email) return this.state.sort.asc;
                    if(a.email < b.email) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "address":
                this.setState(this.state.results.sort((a,b)=>{ 
                    if(a.location.street.number > b.location.street.number) return this.state.sort.asc;
                    if(a.location.street.number < b.location.street.number) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "city":
                this.setState(this.state.results.sort((a,b)=>{ 
                    if(a.location.city > b.location.city) return this.state.sort.asc;
                    if(a.location.city < b.location.city) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "state":
                this.setState(this.state.results.sort((a,b)=>{ 
                    if(a.location.state > b.location.state) return this.state.sort.asc;
                    if(a.location.state < b.location.state) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
            case "postcode":
                this.setState(this.state.results.sort((a,b)=>{ 
                    if(a.location.postcode > b.location.postcode) return this.state.sort.asc;
                    if(a.location.postcode < b.location.postcode) return -1 * this.state.sort.asc;
                    return 0;
                }));
                break;
        }
    }

    render() {
        return (
            <table className="Directory table-striped border mx-auto">
                <thead className="border-bottom">
                    <tr>
                        <th></th> 
                        <th onClick={this.handleSortChange} id="firstName">First Name</th>
                        <th onClick={this.handleSortChange} id = "lastName">Last Name</th>
                        <th onClick={this.handleSortChange} id = "gender">Gender</th>
                        <th onClick={this.handleSortChange} id = "age">Age</th>
                        <th onClick={this.handleSortChange} id = "email">Email</th>
                        <th onClick={this.handleSortChange} id = "address">Address</th>
                        <th onClick={this.handleSortChange} id = "city">City</th>
                        <th onClick={this.handleSortChange} id = "state">State</th>
                        <th onClick={this.handleSortChange} id = "postalCode">Postal Code</th>          
                    </tr>
                </thead>
                <SearchResults results={this.state.results} />                        
            </table>
        );
    }
}

export default Directory;
