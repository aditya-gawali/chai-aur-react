import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {


  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/aditya-gawali')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //     })

  // }, [])

  return (


    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex items-center flex-col gap-4'>
      <img src={data.avatar_url} alt="Github picture" width={300} className='rounded-full' />
      <p>Username : {data.name}</p>
      <p>Github Following: {data.following} Followers : {data.followers}</p>

    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/aditya-gawali')
  return response.json()
}
