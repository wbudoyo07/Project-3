import axios from "axios";

export default {
  // Gets all adminstators data
  getAdmin: function() {
    return axios.get("/api/admin");
  },
  // Gets a admisntrator data with the given id
  getAdminId: function(id) {
    return axios.get("/api/admin/" + id);
  },
  // Deletes the adminstrator data  with the given id
  deleteAdmin: function(id) {
    return axios.delete("/api/admin/" + id);
  },
  // Saves a adminstrator  data to the database
  saveAdmin: function(adminData) {
    return axios.post("/api/admin",adminData);
  }
};
