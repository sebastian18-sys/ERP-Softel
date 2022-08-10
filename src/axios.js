import axios from "axios";

//API URL backend
const instance = axios.create({
    // local
    // baseURL: "http://localhost:5000/api/"
    // Deploy in AWS
    // baseURL: "http://erptelecomunications-env.eba-fjcmfbiy.us-east-2.elasticbeanstalk.com/api/"
    baseURL: "https://app-erptelecomunications.herokuapp.com/api/"
});

export default instance;