import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[error,setError] = useState(null);
    useEffect(() => {
        fetch(url)
          .then((res) => { 
            if (!res.ok) { 
              throw Error('could not fetch');
            } 
            return res.json ();
           })
          .then((data) =>{
             setData(data);
             setIsLoading(false); 
             setError(null); 
            })
          .catch((error) => { 
            setError(error.message); 
            setData([]); 
            setIsLoading(false);});
    },[]);
    return {data,isLoading,error}
}

export default useFetch