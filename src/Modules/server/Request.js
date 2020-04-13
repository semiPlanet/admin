import axios from 'axios'
import { environment } from '../const/environment';

const request = async function (options, isHeader = false) {
  let authHeader = null;
  if (isHeader) {
    authHeader =  localStorage.getItem("authorization")
  }

  const client = axios.create({
    baseURL: environment.api,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("authorization")}`
    }
  });

  const onSuccess = (response) => {
    return response.data;
  }

  const onError = (error)=>  {
    if (error.response) {
      return error.response.data
    } else {
      return error.message
    }
  }


  return client(options)
    .then(onSuccess)
    .catch(onError);
}

export default request;