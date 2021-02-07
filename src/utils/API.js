import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
function getUsers(numUsers){
  // if localhost try using: `https://cors-anywhere.herokuapp.com/http://randomuser.me/api/?results=${numUsers}`
  return axios.get(`https://randomuser.me/api/?results=${numUsers}`);
}
export default {
  getUsers
};