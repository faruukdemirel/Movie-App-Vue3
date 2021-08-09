import axios from 'axios'
import env from '../env'

let baseHref=`http://www.omdbapi.com/?apikey=${env.apiKey}&`

export  function getData(endPoint){
    return axios.get(`${baseHref}${endPoint}`).catch(err =>{
        console.log(err);
        throw new Error("Http Get Error")
    })
}