import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
  // const apikey=`AIzaSyCzRZPcwbg26RMwq2XSjhPNqQEzh6LusG4`
  // const url = `https://www.googleapis.com/youtube/v3/`
  const [data, setData] = useState([])
  const [search,setSearch] = useState("")
  const url2=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCzRZPcwbg26RMwq2XSjhPNqQEzh6LusG4&maxResults=500`
  useEffect(()=>{
   async function fetchvideos(){
      const res = await fetch(url2)
      const data2 = await res.json()
      console.log(data2)
      setData(data2.items)
    }
    fetchvideos();

  },[])
  const clickMe =async()=>{
    const api2=`https://www.googleapis.com/youtube/v3/search?q=${search}&part=snippet&key=AIzaSyCzRZPcwbg26RMwq2XSjhPNqQEzh6LusG4&maxResults=500`
    const response = await fetch(api2)
    const data2 = await response.json()
    console.log(data2)
    setData(data2.items)


  }
  // const fetchvideo =()=>{
  //   axios.get(url),{
  //     param:{
  //       key:apikey,
  //       q:"",
  //       type:"video",
  //       part:"snippet",
  //       maxresults:10

  //     }
  //   }.then((response)=>{
  //     console.log(response)

  //   }).catch((error)=>{
  //     console.log(error)

  //   })


  // }
  return (
    <>
    <input type="text" onChange={(e)=>{
      setSearch(e.target.value)
    }} />
    <button onClick={clickMe}>search</button>
    <div>
       {
      data.map((pack)=>{
        const {snippet}=pack
        return(
          <>
          <img src={snippet.thumbnails.medium.url} alt="" />
          <h2>{snippet.title}</h2>
          <h2>{snippet.channelTitle
}</h2>

          
          </>
        )

      })
    }

    </div>
   


      
      
    </>
  )
}

export default App
