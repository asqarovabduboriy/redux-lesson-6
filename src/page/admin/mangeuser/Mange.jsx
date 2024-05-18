import React from 'react'
import UserWrapper from '../../../components/userwarpper/UserWrapper'
import {useGetUsersQuery} from '../../../context/user'

const Mangeuser = () => {
  const {data} = useGetUsersQuery()
  console.log(data)
  return (
   <div className="container">
    <h1 style={{ textAlign: "center", margin: "20px" }}>Mangeuser</h1>
    <UserWrapper  data={data} isadmin={true}/>
   </div>
  )
}

export default Mangeuser