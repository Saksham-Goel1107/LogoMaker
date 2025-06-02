"use client"
import React, { useEffect, useState } from 'react'
import Header from './_components/Header'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { UserDetailContext } from './_context/UserDetailContext'

const Provider = ({children}) => {
  const {user} = useUser()
  const [UserDetail, setUserDetail] = useState(null) 
  useEffect(()=>{
    if(user){
      CheckUserAuth()
    }
  },[user])
  const CheckUserAuth = async ()=>{
    const result = await axios.post('/api/users',{
      userName:user?.fullName,
      userEmail:user?.primaryEmailAddress?.emailAddress
    })
    console.log(result)
    setUserDetail(result.data)
  }
  return (
    <div>
      <UserDetailContext.Provider value={{UserDetail,setUserDetail}}>
        <Header/>
        <div className='px-10 lg:px-32 xl:px-48 2xl:px-56'>{children}</div>
        </UserDetailContext.Provider>
    </div>
  )
}

export default Provider
