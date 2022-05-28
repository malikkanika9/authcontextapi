import React from 'react'
import { useContext } from 'react';
import {AuthContext} from "../context/AuthContext"
export default function Show() {
    const {isAuth,loading,toggleAuth,setloading} = useContext(AuthContext);
  return (
     <div>
         {
             !isAuth && <div> logged out </div>
         }
    {
      (loading?<div>loading...</div>:<div>userToken:{isAuth}</div>)
    }
 </div>
  )
}