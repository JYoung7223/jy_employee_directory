import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API

export default {
  getUsers: function(numUsers) {
    return axios.get(`https://cors-anywhere.herokuapp.com/http://randomuser.me/api/?results=${numUsers}`);
  }
};
    // , {
    //   headers:{
    //     "Accept": "application/json"
    //   }
    // });
