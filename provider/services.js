const url="https://api.nasa.gov/neo/rest/v1/neo/";
const randomid_url="https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=MbKNLVFKcfWdYPUKuBynHetbE7iqRfggR1gce6eh"
export const getAsteroidDetail=(id)=>{
    
    return fetch(url+id+`?api_key=MbKNLVFKcfWdYPUKuBynHetbE7iqRfggR1gce6eh`,
    {method:"get"}
    ).then((response)=>response.json())
    .then((responsejson)=>{
        console.log(responsejson);
        return responsejson;
    }).catch((error)=>
    error)
}

export const randomAsteroid=()=>{
 
    return fetch(randomid_url,
    {method:"get"}
    ).then((response)=>response.json())
    .then((responsejson)=>{
        console.log(responsejson);
        return responsejson;
    }).catch((error)=>
         error)
    
}