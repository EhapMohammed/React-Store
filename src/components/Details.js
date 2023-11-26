import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const {id} = useParams();
    const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then((data) => setData(data))
  }, [])
  
console.log(data)
  return (
    <div>
      <p className='text-center'>{id}</p>
    </div>
  )
}

export default Details
