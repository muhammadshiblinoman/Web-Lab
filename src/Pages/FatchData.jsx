import React, { useEffect, useState } from 'react'
// import DataPattarn from './DataPattarn';

function FatchData() {
    const [SaveData, SetData] = useState(null);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((data) => SetData(data))

    } , [])
  return (
    <div>
      <div className='Card'>
        {SaveData&&
            SaveData.map((data) => <p>{data.phone}</p>)
        }
      </div>
    </div>
  )
}

export default FatchData
