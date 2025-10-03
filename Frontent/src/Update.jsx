import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
const Update = () => {
  const {id} = useParams()
  // console.log(id)
  const [user,setUser] = useState("")


  useEffect(()=>{
  fetch(`/api/update/${id}`).then((res)=>{return res.json()}).then((result)=>{
    setUser(result.data.UserName)
  })
  },[])
  


  function handleFrom(e){
    e.preventDefault()
    const formData = { userName: user };

    fetch(`/api/newupdatevalue/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
  }

  return (
    <div>
      <h2>Update 😎</h2>
        <form action="" onSubmit={handleFrom}>
            <label htmlFor="">User Name</label>
            <input type="text" value={user} onChange={(e)=>{setUser(e.target.value)}}/>
            
           <input type="button" value="Update" />
        </form>
    </div>
  )
}

export default Update