
import React, { useEffect } from 'react'

function Items() {
    const [items, setItems] = React.useState(null);
   useEffect(()=>{
    fetchData()
   },[])
     
    async function fetchData(){
        let res = await fetch("https://api.escuelajs.co/api/v1/products")
        let data = await res.json()
        console.log(data)
        setItems(data)
    }
    // fetchData()
  return (
    <div>
        {items && items.map((item)=>{
            return(
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <img src={item.images[0]} alt={item.title} style={{width : '200px', height : '200px'}}/>
                    <h3>{item.price}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default Items