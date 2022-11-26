import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [lerror, setLerror] = useState(null)
  const [lisLoading, setLisloading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (lemailornum, lpassword) => {
    setLisloading(true)
    setLerror(null)

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ lemailornum, lpassword })
    })
    const json = await response.json()

    if (!response.ok) {
      setLisloading(false)
      setLerror(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setLisloading(false)
    }
  }

  return { login, lisLoading, lerror }
}