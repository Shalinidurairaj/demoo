import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Setting() {

  const [data,setData] =useState(true)

  const handlesubmit =() => {
    setData(!data)
  }
  useEffect( () =>{
    toast.success("you are logged in")
  },[])

  return (
    <div>
      <ToastContainer/>
      {data ? "you are logged in"  : "you are not logged in "}

      <button onClick={handlesubmit}>submit</button>
      </div>
  )
}

export default Setting

