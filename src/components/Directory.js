import React, { Component } from "react";
import API from "../utils/API.js";
import SearchResults from "./SearchResults.js";

class Directory extends Component {
    state = {
        filter: [{
            attribute: "",
            match: ""
        }],
        sort: {},
        limit: 50,
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getUsers(this.state.limit)
            .then( (response)=> {
                this.setState({ results: response.results});
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
        console.log(event);
    }

    render() {
        return (
            <table className="Directory table-striped border mx-auto">
                <thead className="border-bottom">
                    <tr>
                        <th></th> 
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postal Code</th>          
                    </tr>
                </thead>
                <SearchResults results={this.state.results} />                        
            </table>
        );
    }
}

export default Directory;
