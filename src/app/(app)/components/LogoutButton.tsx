'use client'

import { redirect } from 'next/navigation'

export default function LogoutButton() {
  const logout = async () => {
    const response = await fetch('http://localhost:3000/api/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
    redirect('/login')
  }
  return (
    <button
      onClick={() => {
        logout()
      }}
    >
      Logout
    </button>
  )
}
