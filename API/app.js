const api  = require('../Util/apiCall')

        /*Get Api  */
async function getApi() {
    const res = await api.getApi("https://reqres.in/api/users?page=2");
    // console.log("The reponse is :", res);
    console.log("The reponse status is :", res.status);
    console.log("The reponse status is :", await res.data.data[0].id);
}

getApi();

        /*Post Api  */
async function postApi() {
    const data = {
    "name": "Siva",
    "job": "Backend Developer"
}
    const res = await api.postApi("https://reqres.in/api/users", data);
    // console.log("The reponse is :", res);
    console.log("The reponse status is :", res.status);
    console.log("The reponse status is :", await res.data);
}

postApi();


        /*put Api  */
async function putApi() {
    const data = {
    "title": "Siva",
    "body": "Backend Developer"
}
const getres = await api.getApi('https://jsonplaceholder.typicode.com/posts/1');
    console.log(">>>>>>The get response is >>>>>>>>>>>>>>", await getres.data);
    const res = await api.putApi("https://jsonplaceholder.typicode.com/posts/1", data);
    console.log("The reponse is :", res.data);
}

putApi();

        /* Delete Api */
async function deleteApi() {
    const getres = await api.getApi('https://jsonplaceholder.typicode.com/posts');
    let lastid = await getres.data.length-1
        console.log(">>>>>>The get response is >>>>>>>type0f>>>>>>>",  typeof getres.data);

        // await getres.data.forEach((element) => {
        //     if(element.id === "99") {
        //         console.log("elementelementelementelementelement", element.id);
        //     }
        // });
        console.log(">>>>>>The get response is >>>>>>>>>>>>>>", await getres.data[lastid].id);
        const resp = await api.getApi(`https://jsonplaceholder.typicode.com/posts/${lastid}`);
        console.log(">>>>>>>>>>>>>>>>>Resp>>>>>>>>>>>>>>>>>>>>" , resp.data);
        const res = await api.deleteApi(`https://jsonplaceholder.typicode.com/posts/${lastid}`);
        console.log("The reponse is :", res.data);
    }

deleteApi();