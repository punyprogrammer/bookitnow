import React from 'react'
import  {getSession} from "next-auth/client"

const  UpdateUserProfile = () => {
  return (
    <h1>This  is the profile page</h1>
  )
}
export async function getServerSideProps(context){

 const session=await getSession({req:context.req})
 if(!session)
 {
     return {
         redirect:{
             destination:'/login',
             permanent:false,
         }
     }
 }
 return  {
     props:{session}
 }


}
export default UpdateUserProfile