import React from 'react'
import UserWrapper from '../../components/userwarpper/UserWrapper'
import { useGetUsersQuery } from '../../context/user'

const Users = () => {
  const {data} = useGetUsersQuery()
  return (
   <>
    <div className="container">
        <h2 style={{ textAlign: "center", margin: "20px" }}>Users</h2>
        <UserWrapper data={data}/>
    </div>
   </>
  )
}

export default Users