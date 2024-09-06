import axios from "axios";



// https://api.unsplash.com/search/photos?page=1&query=office

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY



const instance = axios.create();
const ACCESS_KEY = "XVsIRnqyCQ_i84duAZzefi0LZyRpmncIq9-V3Gzh9tE";
instance.defaults.baseURL = `https://api.unsplash.com`;


// Вот этот код ниже не работает
// instance.defaults.headers.common['Authorization'] = `?client_id=${ACCESS_KEY}`;


const fetchData = async (searchInput) => {
    const {data} = await instance.get(`/search/photos?client_id=${ACCESS_KEY}`, {params:{
        query:searchInput,
        per_page:12
    }});    
    return data.results;
};

export default fetchData;

