import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
function getUsers(numUsers){
  return axios.get(`https://cors-anywhere.herokuapp.com/http://randomuser.me/api/?results=${numUsers}`);
}
export default {
  getUsers
};