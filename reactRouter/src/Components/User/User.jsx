import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userName} = useParams();
   
  return (
    <section className="p-5 text-center bg-gray-100">
      <h1>User: {userName}</h1>
      <p>
        <strong>Hint:</strong> Pass any name after the <code>/</code>, e.g., <code>user/John</code>.
      </p>
    </section>
  )
}

export default User

