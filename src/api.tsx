import axios from "axios";

const client = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com/users" 
});

export default client;