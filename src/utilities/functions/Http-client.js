
import axios from 'axios';

const axiosClient = axios.create();
const apiEndpoint = 'http://localhost:5000/';
const defaultParams = {
    withCredentials : true
}


export function getRequest(url, queryParams) {
    return axiosClient.get(apiEndpoint + url,defaultParams);
}

export function postRequest(url, payload) {
    return axiosClient.post(apiEndpoint + url, payload, defaultParams);
}

export function putRequest(url, payload) {
    return axiosClient.put(apiEndpoint + url, payload, defaultParams);
}

export function deleteRequest(url) {    
    return axiosClient.delete(apiEndpoint + url, defaultParams);
}