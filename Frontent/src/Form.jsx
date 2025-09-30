import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [user, setUser] = useState("")
  const [data, setData] = useState([])

  function handleChange(e) {
    e.preventDefault()
    const formData = { UserName: user }
    fetch('/api/data', { // Replace with your backend endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Convert data to JSON string
    }).then((res) => { return res.json() }).then((result) => {
      console.log(result)
      setUser("")
    });

  }

  function handleData() {
    fetch("/api/showdata").then((res) => { return res.json() }).then((result) => {
      // console.log(result)
      setData(result)
    })
  }

  function handleDelete(id){
    fetch('/api/userdelete/:id',{
      method:"DELETE"
    })
  }

  return (
    <div>
      <form action="" onSubmit={handleChange}>
        <label htmlFor="">User Name</label>
        <input type="text" value={user} onChange={(e) => { setUser(e.target.value) }} />
        <input type="submit" value="Done" />
      </form>
      <br />
      <br />
      <button onClick={handleData}>Show user Data</button>
      <table>
        {
           data.map((itam, index) => (
          <tr>
                <td>
                  <span>{itam.UserName}</span>
                </td>
                <td>
                  <button onClick={()=>{handleDelete(index)}}>Delete</button>
                </td>
                <td>
                   <button>Update</button>
                </td>
              </tr>
        ))
        }
      </table>
      {/* {
        data.map((itam, index) =>
          <ul>
            <span>{itam.UserName}</span>
            <button onClick={()=>{handleDelete(index)}}>Delete</button>
            <button>Update</button>
          </ul>
      )} */}
      
    </div>
  )
}

export default Form;
