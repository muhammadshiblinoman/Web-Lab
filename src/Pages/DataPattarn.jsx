import React, { useEffect, useState } from 'react'

function DataPattarn() {
  const [SaveData, SetData] = useState(null)

  useEffect( ()=> {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.json())
    .then((data) => SetData(data))
  }, [])

  return (
    <div>
      <div className='FetchData'>
        {SaveData&&
          SaveData.map((data) => <p>{data.idCategory}</p>)
        }
      </div>
    </div>
  )
}

export default DataPattarn
