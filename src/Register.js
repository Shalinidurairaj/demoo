import React, { useState } from 'react'

function Register() {

    const[data,setData]=useState('')
    const handlesubmit = () =>{
        localStorage.setItem("Username",data)
    }
  return (
    <div>
        <h1>Register page</h1>
        <div className='user-wrap'>
            <label>Username :</label>
            <input type='text'placeholder='Enter the Username :'
            value={data}
            onChange={(e) => setData(e.target.value)}
            />
            <button onClick={handlesubmit}>submit</button>
        </div>
    </div>
  )
}

export default Register
