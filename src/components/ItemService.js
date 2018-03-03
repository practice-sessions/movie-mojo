    /* global axios */
var Axios = require("axios"); // eslint-disable-line no-unused-vars

class ItemService {
  
  sendData(data) {
    axios.post('http://localhost:8080/items/add/post', {
      item:data
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}


export default ItemService;