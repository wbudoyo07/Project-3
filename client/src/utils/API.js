import axios from "axios";

export default {
  // Gets all administrator data
  getAdmin: function() {
    return axios.get("/api/admin");
  },
  // Gets a administrator data with the given id
  getAdminId: function(id) {
    return axios.get("/api/admin/" + id);
  },
  // Deletes the administrator data  with the given id
  deleteAdmin: function(id) {
    return axios.delete("/api/admin/" + id);
  },
  // register  new  administrator  data to the database
  saveAdmin: function(adminData) {
    return axios.post("/api/admin",adminData);
  },

  // Gets all Items
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the Item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the Item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  saveResponse:function(id,responseData) {
    return axios.post("/api/items/response"+id, responseData);
  },
  // Saves a Item to the database
  saveItem: function(id,itemData) {
    return axios.post("/api/items/"+id, itemData);
  },
  // data of join collection
  populateData : function() {
    return axios.get("/api/populatedData");
  },
  //Twilio send message
  sendText : function() {
    return axios.get("/api/twilio/sendText");
  },

  // Authenticates  the existed user in the DB
  loginIn: function(loginData) {
    return axios.post("/api/admin/login", loginData);
  }, 

  logOut: function() {
    return axios.post("/api/admin/logout");
  },
   // get all datas  form the authentication 
  loginData : function() {
    return axios.get('/api/admin/login');
  },

 // Saves a response to the database
 saveResponse: function(id,responseData) {
  return axios.post("/api/response/"+id, responseData);
}
};
