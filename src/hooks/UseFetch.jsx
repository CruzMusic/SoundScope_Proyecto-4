import { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect( () => {
      const fetchURL = async () =>{
        try {
          setLoading(true)

          const audioURL= await fetch(url)
          const jsonURL = await audioURL.json()

          setData(jsonURL)
        
        } catch (error) {
          setError(error)
          setData(null)
        }finally{
          setLoading(false)
        }
      }

      fetchURL()
    }, [url])

  return {
    data, loading, error
  }
}

export default UseFetch