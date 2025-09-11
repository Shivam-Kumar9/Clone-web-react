import { useState } from "react"


export default async function useFetch(URL){
    const [fetchData ,setFetchData] = useState([])
    const [loading, setLoading] = useState(true)
    const [Error , setError] = useState(null)
    try {
        let res  = await fetch(URL)
        if(!res.OK){  throw new Error('some thing wrong in server')  }
        let data = await res.json()
            setFetchData(data)
           
    } catch (error) {
        setError(error)
    }
    finally { setLoading(false)}

    return [fetchData, loading, Error]
}
