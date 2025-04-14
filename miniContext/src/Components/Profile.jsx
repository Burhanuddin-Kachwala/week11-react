import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user){
        return <div>Please login to see your profile</div>
    }
  return (
    <div>
        <h1 className='text-3xl font-bold'>Profile</h1>
        <h1>Welcome {user.username}</h1>
        <h1>Your password is {user.password}</h1>
    </div>
  )
}

export default Profile