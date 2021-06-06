const axios = require('axios');
function apiCall() {
    this.getApi = async function(url) {
        try {
          headers= {
              'Accept':'application/json',
              'Content-Type':'application/json'
          };
  
          const response = await axios({
              method:"get",
              url:url,
              headers:headers,
          });
          console.log("<<<<<<<<<<<<<<<<<<< It is inside get API >>>>>>>>>>>>");
          return await response;
      }
       catch (error) {
            console.log(">>>>>>>>>>>>>>>>errror>>>>>>>>>>>>>>>", error);
        }
          
  
  }

  this.postApi = async (url , payload) => {

    headers = {
        'Accept':'application/json',
        'Content-Type':'application/json'
    };

       let response = await axios({
            method:"post",
            url:url,
            data:payload,
            headers:headers
        })

        return response;

  }

  this.putApi = async (url , payload) => {

    headers = {
        'Accept':'application/json',
        'Content-Type':'application/json'
    };

       let response = await axios({
            method:"put",
            url:url,
            data:payload,
            headers:headers
        })

        return response;

  }

  this.deleteApi = async (url) => {


       let response = await axios({
            method:"delete",
            url:url,
            headers:headers
        })

        return response;

  }


}

module.exports =  new apiCall();