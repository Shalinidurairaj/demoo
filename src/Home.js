import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function Home() {

  const[name, setName]= useState(localStorage.getItem("Username"))

  useEffect(() =>{
    
    toast.success("Welcome !!"  + name)

  })
  return (
    <div>
        <h1>this is home page</h1>
        <ToastContainer/>
            
    </div>
  )
}

export default Home