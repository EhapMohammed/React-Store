import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const {id} = useParams();
  

  const [test, setTest] = useState(["aly","ehab","taher"]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    setTest([...test,"mahmoud"])
  }, [refresh])
  
const add = ()=>{
setRefresh(!refresh)
}

  return (
    <div>
      <p className='text-center'>{id}</p>
      <div>
        {test.map(item=>(
          <div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <button onClick={add}>click</button>
    </div>
  )
}

export default Details
